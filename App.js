import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import AuthProvider from './app/context/auth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar >
          <Rotas/>
        </StatusBar>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: '#000',

  }
})