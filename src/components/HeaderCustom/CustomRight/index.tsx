import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import WineBox from '../../../assets/carrinhoWineBox.png';
import {UserContext,  IValue } from '../../../context/UserContext';

export default function CustomHeader (){

  const { state } = useContext(UserContext) as unknown as IValue;
  return(

    <View>
    <Image
    style={{marginRight: 16, marginTop: 48}}
    source={WineBox}
    />
    <Text
    style={{position: 'absolute', marginTop: 85, marginLeft: 42, backgroundColor: 'white',color: '#00B495'}}
    >
      {state.counter}
    </Text>
  </View>
    )
}