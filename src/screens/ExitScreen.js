// ExitScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';

const ExitScreen = () => {
  const handleExit = () => {
    // Add any additional cleanup logic before exiting the app

    // Exit the app for Android
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thank you for riding with us!</Text>
      <Text style={styles.message}>
        We appreciate you choosing our ride-sharing service. Your safety and satisfaction are our top priorities.
      </Text>
      <Text style={styles.message}>
        If you have any feedback or suggestions, feel free to share. Safe travels!
      </Text>
      <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
        <Text style={styles.exitButtonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
  exitButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  exitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ExitScreen;
