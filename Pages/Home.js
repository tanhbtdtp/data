import * as React from 'react';
import { Text, View,StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';


import ProfileDetail from './ProfileDetails';
import Profile from './Profile';
import Personal from './Personal';
import Products from './Products';

import App_Color from '../Themes/Color';

function HomeScreen() {
  return (         

          <ProfileDetail/>                   
          );
}

function HomeScreen1() {
  return (
    <View style={{ flex: 1}}>
      <Profile/>
    </View>
  );
}

function SanPham() {
  return (
    <View style={{ flex: 1}}>
      <Products/>
    </View>
  );
}

function PersonScreen() {
  return (
    <View style={{ flex: 1}}>
      <Personal/>
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
                
              } else if (route.name === 'SanPham') {
                iconName = focused ? 'settings' : 'settings';

              } else if (route.name === 'Personal') {
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
          <Tab.Screen name="SanPham" component={SanPham} />
          <Tab.Screen name="Personal" component={PersonScreen} />
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