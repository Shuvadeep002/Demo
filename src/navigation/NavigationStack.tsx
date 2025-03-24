import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneRegisterScreen from '../screens/PhoneRegisterScreen';

export default function NavigationStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}
        >
            <Stack.Screen name="PhoneRegisterScreen" component={PhoneRegisterScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})