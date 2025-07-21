import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ title: 'Main' }} />
      <Drawer.Screen name="(drawer)/profile" options={{ title: 'Profile' }} />
    </Drawer>
  );
}
