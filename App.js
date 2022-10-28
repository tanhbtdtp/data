import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./Pages/Login";
// tab 
import Home from "./Pages/Home";

import Profile from "./Pages/Profile";
import ProfileDetail from "./Pages/ProfileDetails";
import Loading from "./Components/Loading";
import Test from "./Pages/Test";
import KpiDetails from "./Pages/KpiDetails";


// Thư viện sử dụng
// yann add expo
// yarn add axios

// Navigation:
// yarn add @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// Stack :
// yarn add @react-navigation/native-stack
// yarn add @react-navigation/bottom-tabs

const Stack = createNativeStackNavigator();
export default function App() {
return(
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component= {Login}/>       
        <Stack.Screen name="Home" component= {Home}/>            
      </Stack.Navigator>
</NavigationContainer>

//<Test/>

)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
