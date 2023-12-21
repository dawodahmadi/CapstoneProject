import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ExitScreen from '../screens/ExitScreen';
import HelpScreen from '../screens/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingScreen';
import MapScreen from '../screens/MapScreen';
import PaymentScreen from '../screens/PaymentScreen';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(HomeScreen)}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(MapScreen)}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(PaymentScreen)}>
        <Text>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(HelpScreen)}>
        <Text>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(ProfileScreen)}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(SettingScreen)}>
        <Text>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen(ExitScreen)}>
        <Text>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DrawerContent;
