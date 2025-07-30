import { AuthProvider, useAuth } from "@/context/AuthContext";
import { JobProvider } from "@/context/JobContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <InnerLayout />
    </AuthProvider>
  );
}

function InnerLayout() {
  const { token } = useAuth();

  return (
    <>
      {token ? (
        <JobProvider>
          <Slot />
        </JobProvider>
      ) : (
        <Slot />
      )}
    </>
  );
}
