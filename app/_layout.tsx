import { AuthProvider } from "@/context/AuthContext";
import { JobProvider } from "@/context/JobContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <JobProvider>
        <Slot />
      </JobProvider>
    </AuthProvider>
  )
}