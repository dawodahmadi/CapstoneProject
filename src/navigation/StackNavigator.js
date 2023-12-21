import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import GmailSignInScreen from '../screens/GmailSignInScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import PaymentScreen from '../screens/PaymentScreen';
import DrawerContent from './DrawerContent';
import {createStackNavigator} from "@react-navigation/stack";
import NavigationDrawer from "./DrawerNavigation";

const stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <stack.Navigator >
          <stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <stack.Screen name="GmailSignInScreen" component={GmailSignInScreen} options={{ headerShown: false }} />
          <stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{ headerShown: false }} />
          <stack.Screen name="NavigationDrawer" component={NavigationDrawer} options={{ headerShown: false }} />
        </stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default StackNavigator;
