<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from "./src/navigation/StackNavigator";
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <StackNavigator />
        <Toast />
      </PaperProvider>
    </Provider>
  );
}
>>>>>>> origin/main
