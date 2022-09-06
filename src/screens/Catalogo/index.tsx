import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { IData } from './interfaces';
import {CardView, ScrollViewCards} from './styles';


export default function () {
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    const dataWines = async () => {
      const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=45')
      const data = await res.json();
      setData(data);
    }
    dataWines()
  }, [])
  // console.log(data)
  return (
    <SafeAreaView>
      <Input placeholder='O que você está procurando?' autoCompleteType={undefined} />
      <Text>{data?.totalItems} produtos encontrados</Text>
      <ScrollView contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-evenly', paddingTop: 24}}>
        {data?.items.map((item) => (
          <CardView key={item.id}>
            <Image
            style={{width: 100, height: 200}}
            source={{uri: item.image}}
            />
            <Text>{item.priceNonMember} + {Number((item.discount/item.priceNonMember).toFixed(2))*100}% OFF</Text>
            <Text>Sócio Wine R$ {item.priceMember}</Text>
            <Text>Não Sócio R$ {item.priceNonMember}</Text>


          </CardView>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}