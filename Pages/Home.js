import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';


import ProfileDetail from './ProfileDetails';
import Profile from './Profile';
import App_Color from '../Themes/Color';

function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <ProfileDetail/>
    </View>
  );
}

function HomeScreen1() {
  return (
    <View style={{ flex: 1}}>
      <Profile/>
    </View>
  );
}

function HomeScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home2!</Text>
      <FontAwesome name="home" color={'black'} size={30}/> 
    </View>
  );
}

function PersonScreen() {
  return (
    <View style={{ flex: 1}}>
      <ProfileDetail/>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function Home() {
    return (      
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown:false,            
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;                
              if (route.name === 'Trang chủ') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'HomeScreen1') {
                iconName = focused ? 'information-circle' : 'information-circle';
              } else if (route.name === 'HomeScreen2') {
                iconName = focused ? 'settings' : 'settings';
              } else if (route.name === 'Cá nhân') {
                iconName = focused ? 'person' : 'person';
              }    
              

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: App_Color.MauTrang,
            tabBarInactiveTintColor: App_Color.MauToi, 
            tabBarShowLabel:false,  
            tabBarStyle: [styles.tabBarStyle]
          })}
        >
          <Tab.Screen name="Trang chủ" component={HomeScreen} />
          <Tab.Screen name="HomeScreen1" component={HomeScreen1} />
          <Tab.Screen name="HomeScreen2" component={HomeScreen2} />
          <Tab.Screen name="Cá nhân" component={PersonScreen} />
        </Tab.Navigator>
    
    );
  }  

  const styles = StyleSheet.create({
    tabBarStyle: {      
      backgroundColor: App_Color.MauNen,  
      position:'absolute',      
      left:10,   
      right:10,
      bottom:10,
      height:70,
      borderRadius:20
    },
  })