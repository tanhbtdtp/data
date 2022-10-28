import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ProfileDetail from './ProfileDetails';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
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

const HomeStack = createBottomTabNavigator();
export default function Home() {
  return (    
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Trang chủ" component={HomeScreen} />
        <HomeStack.Screen name="Cá nhân" component={SettingsScreen} />
      </HomeStack.Navigator>    
  );
}