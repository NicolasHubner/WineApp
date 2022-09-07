import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { IData, INavigation } from './interfaces';
import { CardView, WineImage, StickImage, MemberPrice, TtitleText, ViewPriceBoth, TextNoMember, PriceMemberPink, PriceStrached, Discount, CounterItems, InputSection, CardContainer } from './styles';
import Selos from '../../assets/selos.png';
import { useFonts } from 'expo-font';
import SearchBar from '../../assets/Search.png'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { UserContext, IValue } from '../../context/UserContext';
import { PriceConvert } from '../../helpers/priceConverter';



export default function Catalogo() {
  const [data, setData] = useState<IData | null>(null);
  const navigation = useNavigation() as INavigation;
  const { dispatch } = useContext(UserContext) as unknown as IValue;

  const [fontsLoaded] = useFonts({
    'Lato': require('../../assets/fonts/Lato-Regular.ttf'),
    'OpenSans': require('../../assets/fonts/open-sans-v34-latin-regular.ttf'),
    'NeoSans': require('../../assets/fonts/NeoSansPro-Regular.ttf')
  });


  useEffect(() => {
    const dataWines = async () => {
      const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=45')
      const data = await res.json();
      setData(data);
    }
    dataWines()
  }, [])
  return (
      <SafeAreaView style={{ marginBottom: 100 }}>
        <InputSection>
          <Image
            source={SearchBar} />
          <TextInput style={{ marginLeft: 18 }} placeholder='O que você está procurando?' />
        </InputSection>
        <CounterItems>{data?.totalItems} produtos encontrados</CounterItems>
        <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {data?.items.map((item) => (
            <CardContainer key={item.id}>
              <CardView
                onPress={() => navigation.navigate({
                  name: 'PageProduct',
                  params: {
                    item: item
                  }
                })}
              >
                <WineImage
                  source={{ uri: item.image }}
                />
                <TtitleText>{item.name}</TtitleText>
                <ViewPriceBoth>
                  <PriceStrached>R$ {PriceConvert(item.priceNonMember)}</PriceStrached>
                  <Discount>{Number((item.discount / item.priceNonMember).toFixed(2)) * 100}% OFF</Discount>
                </ViewPriceBoth>
                <ViewPriceBoth style={{ marginBottom: 20, marginTop: 10 }}>
                  <MemberPrice>SÓCIO WINE</MemberPrice>
                  <PriceMemberPink>R$ {PriceConvert(item.priceMember)}</PriceMemberPink>
                </ViewPriceBoth>
                <TextNoMember style={{ marginBottom: -12 }}>NÃO SÓCIO R$ {PriceConvert(item.priceNonMember)}</TextNoMember>
                <StickImage
                  source={Selos}
                />
              </CardView>
              <Button
                buttonStyle={{
                  width: "100%",
                  backgroundColor: '#7EBC43',
                  justifyContent: "flex-end",
                  paddingRight: 58,
                  borderRadius: 4,
                  height: 40
                }}
                title="Adicionar"
                titleStyle={{ fontFamily: "Lato", fontSize: 14, textAlign: 'center', fontWeight: "700", lineHeight: 16 }}
                onPress={() => dispatch({
                  type: 'SetCounter'
                })}
              />

            </CardContainer>
          ))}
        </ScrollView>
      </SafeAreaView>
  )
}