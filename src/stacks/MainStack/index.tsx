import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Catalogo from "../../screens/Catalogo";
import PageProduct from "../../screens/PageProduct";
import CustomStack from '../../components/HeaderCustom/CustomLeft/index';
import CustomRight from "../../components/HeaderCustom/CustomRight";
import { navigationRef, isReadyRef } from "../../RootNavigation";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>{
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: { backgroundColor: "#DEDEDE" },
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerRight: () => <CustomRight />
        }}

      >
        <Stack.Screen
          options={{ title: "", headerLeft: () => <CustomStack />, }}
          name="Home" component={Catalogo} />
        <Stack.Screen
          name="PageProduct"
          options={{
            title: "", headerStyle: { backgroundColor: '#DEDEDE' }
          }}
          component={PageProduct as any} />
      </Stack.Navigator>
}</NavigationContainer>
  )
}