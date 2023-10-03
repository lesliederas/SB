import { StyleSheet, Text, SafeAreaView, View,TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data =[
{
  id: "SmartBus 123",
  title: "Smart Bus_1",
  multiplier: 0.0,
  icon: "bus-outline",

},
{
  id: "SmartBus 456",
  title: "Smart Bus_2",
  multiplier: 0.0,
  icon: "bus-outline",
},
{
  id: "SmartBus 789",
  title: "Smart Bus_3",
  multiplier: 0.0,
  icon: "bus-outline",
}

]
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw` bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="font-awesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5  font-semibold text-xl`}>select a ride - {travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList data={data} keyExtractor={(item) => item.id}
      renderItem={({item:{id, title, multiplier,icon},item})=>(
        <TouchableOpacity 
        onPress={()=>setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 ${
          id === selected?.id && "bg-gray-200"
        }`}> 
       <Icon
        name={icon}
        type="ionicon"
        color="black"
        size={80}
        />
        <View style={tw`-ml-8`}>
        <Text style={tw`text-xl font-semibold`}>{title}</Text>
        <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
        </View>
        </TouchableOpacity>
      )}
      />
      <View>
       <TouchableOpacity 
       disabled={!selected}
       style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300"}`}>
       <Text style={tw` text-center text-white text-xl`}>
        you chose {selected?.title}</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})