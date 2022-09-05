import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack'
import UserContextProvider from './src/context/UserContext'


export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
        <StatusBar />
      </NavigationContainer>
    </UserContextProvider>
  )
}