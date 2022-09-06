import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Catalogo from "../../screens/Catalogo";
import PageProduct, { IProps } from "../../screens/PageProduct";
import CustomStack from '../../components/HeaderCustom/CustomLeft/index';
import CustomRight from "../../components/HeaderCustom/CustomRight";
import GoBack from '../../assets/goBack.png'
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
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
        options={{ title: "",headerStyle: {backgroundColor: '#DEDEDE'}
      // headerLeft: () => <TouchableOpacity><Image source={GoBack} wid/></TouchableOpacity>
      }}
        component={PageProduct as any} />
    </Stack.Navigator>
  )
}