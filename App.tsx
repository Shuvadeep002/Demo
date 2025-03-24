import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneRegisterScreen from './src/screens/PhoneRegisterScreen'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})