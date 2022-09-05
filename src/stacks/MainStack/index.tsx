import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Catalogo from "../../screens/Catalogo";
import PageProduct from "../../screens/PageProduct";
import CustomStack from '../../components/HeaderCustom/CustomLeft/index';
import CustomRight from "../../components/HeaderCustom/CustomRight";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#DEDEDE" },
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerLeft: () => <CustomStack />,
        headerRight: () => <CustomRight />
      }}
    // headerBar={(props)=><CustomStack {...props}>},

    >
      <Stack.Screen
        options={{ title: "" }}
        name="Home" component={Catalogo} />
      <Stack.Screen name="PageProduct" component={PageProduct} />
    </Stack.Navigator>
  )
}