import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    //<LoginScreen></LoginScreen>
    //<HomeScreen></HomeScreen>
    <NavigationContainer>
      <AuthNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
