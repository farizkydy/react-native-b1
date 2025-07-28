import { JobProvider } from "@/context/JobContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <JobProvider>
      <Slot />
    </JobProvider>
  )
}