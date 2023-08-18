import { StatusBar } from "expo-status-bar";
import ProfileScreen from "./screens/profile/ProfileScreen";

export default function App() {
  return (
    <>
      <ProfileScreen />
      <StatusBar style="auto" />
    </>
  );
}
