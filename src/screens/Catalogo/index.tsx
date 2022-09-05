import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';



export default function () {
  interface IData {
    totalItems: number;
    items: any[];
  }

  const [data, setData] = useState<IData |null>(null);

  useEffect(() =>{
    const dataWines = async () => {
      const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=45')
      const data = await res.json();
      setData(data);
    }
    dataWines()
  }, [])
  // console.log(data)
  return (
    <>
    <Input placeholder='O que você está procurando?' autoCompleteType={undefined}/>
    <Text>{data?.totalItems} produtos encontrados</Text>
    <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {/* <FlatList data={data?.items} renderItem={({item}) => (
      <><Text>{item.price}</Text></>)}/> */}
    {data?.items.map((item) => (
      <View key={item.id}>
      <Text>{item.price}</Text>
      </View>
    ))}
    </View>
    </ScrollView>
    </>
  )
}