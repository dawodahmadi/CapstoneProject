import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentScreen from "../screens/PaymentScreen";
import HeaderBackButton from "../components/HeaderBackButton";
import SettingsScreen from "../screens/SettingScreen";
import ChatScreen from "../screens/HelpScreen";
import UserDetailScreen from "../screens/UserDetailScreen";
import MapScreen from '../screens/MapScreen';

const NavigationDrawer = () => {
    const Drawer = createDrawerNavigator();
    const options = {
        headerTitleAlign: 'center',
    };

    return (
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'front',
                    drawerStatusBarAnimation: 'slide',
                    gestureEnabled: false,
                    headerLeft: () => <HeaderBackButton />,
                }}
                
                initialRouteName={'HomeScreen'}
                >
                <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: true }} />
                <Drawer.Screen name="ProfileScreen" component={UserDetailScreen} options={{ headerShown: true }} />
                <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: true }} />
                <Drawer.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: true }} />
                <Drawer.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: true }} />
                <Drawer.Screen name="MapScreen" component={MapScreen} options={{ headerShown: true }} />
                {/* <Drawer.Screen name="UserDetailScreen" component={UserDetailScreen} options={{ headerShown: true }} /> */}
                {/* <Drawer.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: true }} /> */}
                {/* <Drawer.Screen name="ExitScreen" component={ExitScreen} options={{ headerShown: true }} /> */}
            </Drawer.Navigator>
    );
};




export default NavigationDrawer;

