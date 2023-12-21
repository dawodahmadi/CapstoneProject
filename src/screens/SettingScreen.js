// SettingsScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Platform, Alert } from 'react-native';

const SettingsScreen = () => {
  const [locationPermission, setLocationPermission] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);

  const handlePermissionChange = (permission, setPermission, permissionType) => {
    // Add your logic to handle permission change
    // For simplicity, we'll just toggle the permission state
    setPermission(!permission);
    Alert.alert(`Permission changed for ${permissionType}`);
  };

  const handleResetApp = () => {
    // Add your logic to reset the app
    // For simplicity, we'll just show an alert
    Alert.alert('App Reset', 'The app has been reset to default settings.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      
      {/* Location Permission */}
      <View style={styles.settingOption}>
        <Text>Location Permission</Text>
        <Switch
          value={locationPermission}
          onValueChange={() => handlePermissionChange(locationPermission, setLocationPermission, 'Location')}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={locationPermission ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      {/* Camera Permission */}
      <View style={styles.settingOption}>
        <Text>Camera Permission</Text>
        <Switch
          value={cameraPermission}
          onValueChange={() => handlePermissionChange(cameraPermission, setCameraPermission, 'Camera')}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={cameraPermission ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      {/* Gallery Permission */}
      <View style={styles.settingOption}>
        <Text>Gallery Permission</Text>
        <Switch
          value={galleryPermission}
          onValueChange={() => handlePermissionChange(galleryPermission, setGalleryPermission, 'Gallery')}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={galleryPermission ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      {/* Additional Settings */}
      <TouchableOpacity style={styles.additionalSetting} onPress={handleResetApp}>
        <Text>Reset App</Text>
      </TouchableOpacity>

      {/* Add more settings options as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  additionalSetting: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default SettingsScreen;
