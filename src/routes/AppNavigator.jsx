import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { CalendarStrip, GenderSelectionScreen, ModalScreen, TagSelectionScreen } from '../screens';
import HomeScreen2 from '../screens/HomeScreen2';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='Onboarding'
                component={OnboardingScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='LoginScreen'
                component={LoginScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='HomeScreen'
                component={HomeScreen} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='HomeScreen2'
                component={HomeScreen2} />
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='GenderSelectionScreen'
                component={GenderSelectionScreen} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='ModalScreen'
                component={ModalScreen} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='TagSelectionScreen'
                component={TagSelectionScreen} />



        </Stack.Navigator>
    )
}

export default AppNavigator