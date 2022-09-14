import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawNavigator from './DrawNavigator';









const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator  screenOptions={{headerShown: false}}>
        <AppStack.Screen name='Login' component={LoginScreen}/>
        <AppStack.Screen name='Homes' component={DrawNavigator}/>
    </AppStack.Navigator>
)

export default AuthNavigator;