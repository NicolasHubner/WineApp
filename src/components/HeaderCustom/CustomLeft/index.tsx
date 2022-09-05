import React from 'react';
import { View, Text, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import VoltarTexto from '../../../assets/VoltarTexto.png';

export default function CustomHeader (){
  // console.log(props)
  return(

    <View>
    <Image
    style={{marginLeft: 16}}
    source={VoltarTexto}
    />
  </View>
    )
}