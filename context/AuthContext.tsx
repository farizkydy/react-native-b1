import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) setToken(storedToken);
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        'https://reqres.in/api/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
          },
        }
      );

      const token = res.data?.token;
      if (!token) throw new Error('No token returned from login');

      await AsyncStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : (error as Error).message;
      throw new Error(`Login failed: ${message}`);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
