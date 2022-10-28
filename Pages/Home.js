import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';

import ProfileDetail from './ProfileDetails';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <FontAwesome name="home" color={'black'} size={30}/> 
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
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
              } else if (route.name === 'Cá nhân') {
                iconName = focused ? 'user' : 'user';
              }  
              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',            
          })}
        >
          <Tab.Screen name="Trang chủ" component={HomeScreen} />
          <Tab.Screen name="Cá nhân" component={SettingsScreen} />
        </Tab.Navigator>
    
    );
  }
  