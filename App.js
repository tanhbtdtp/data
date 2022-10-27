import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";


import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProfileDetail from "./Pages/ProfileDetails";
import Loading from "./Components/Loading";
import Test from "./Pages/Test";
import KpiDetails from "./Pages/KpiDetails";


// Thư viện sử dụng
// yarn add axios



export default function App() {
  return <KpiDetails/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
