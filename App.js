import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,  
} from "react-native";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProfileDetail from "./Pages/ProfileDetails";
import Loading from "./Components/Loading";

export default function App() {
  return <Login/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
