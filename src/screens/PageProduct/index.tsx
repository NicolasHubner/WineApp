import React from 'react';
import { Text, Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ITems } from '../Catalogo/interfaces';
import { SvgUri } from 'react-native-svg';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import { ContainerDescription, ContainerInfo, ContainerPrice, ContainerPriceAdd, Description, Discount, PriceMemberPink, PriceNoMember, PriceTotal, TitleDescription, WineImage, WineTitle } from './styles';

export interface IProps {
  route: {
    params: {
      item: ITems;
    }
  }
}

export default function (props: IProps) {
  const { item } = props.route.params;
  const [fontsLoaded] = useFonts({
    'Lato': require('../../assets/fonts/Lato-Regular.ttf'),
    'OpenSans': require('../../assets/fonts/open-sans-v34-latin-regular.ttf'),
    'NeoSans': require('../../assets/fonts/NeoSansPro-Regular.ttf')
  });

  return (
    <ScrollView contentContainerStyle={{flexDirection: 'column', alignItems: 'center', backgroundColor: '#DEDEDE'}}>
      <WineImage source={{ uri: item.image }} />
      <WineTitle>{item.name}</WineTitle>
      <ContainerInfo>
        <SvgUri style={{ width: 16, height: 16 }} uri={item.flag} />
        <Text>{item.country}</Text>
        <Text>{item.type}</Text>
        <Text>{item.classification}</Text>
        <Text>{item.size || item.volume}</Text>
      </ContainerInfo>
      <ContainerDescription>
      <TitleDescription>Descrição</TitleDescription>
      <Description>{item.sommelierComment}</Description>
      </ContainerDescription>
      <ContainerPriceAdd>
        <ContainerPrice>
          <Discount>{Number((item.discount / item.priceNonMember).toFixed(2)) * 100}% OFF</Discount>
          <PriceTotal>R${item.price}</PriceTotal>
          <PriceMemberPink>R$ {item.priceMember}</PriceMemberPink>
          <PriceNoMember>PREÇO NÃO SÓCIO R$ {item.priceNonMember}</PriceNoMember>
        </ContainerPrice>
      </ContainerPriceAdd>
    </ScrollView>
  )
}