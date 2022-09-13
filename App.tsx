import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack'
import UserContextProvider from './src/context/UserContext'
import { Platform } from 'react-native';


if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/pt-BR');
}

export default function App() {
  return (
    <UserContextProvider>
      {/* <NavigationContainer>{ */}
        <MainStack />
        <StatusBar />
      {/* } */}
      {/* </NavigationContainer> */}
    </UserContextProvider>
  )
}