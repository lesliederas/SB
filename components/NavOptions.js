import { FlatList,Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data =[
    { 
        id:"123",
        title: "Get a ride",
        icon: "bus-outline",
         screen: "MapScreen",
    },
    
    ];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
    data={data}
    horizontal
   keyExtractor={(item)=> item.id}
    renderItem={({item}) =>(
     <TouchableOpacity 
     onPress={() => navigation.navigate(item.screen)}
     style={tw`p-1 pb-3 pt-2 bg-green-700 m-16`}
     >
      <Icon name="bus" type="font-awesome" color="white" size={200}/>
     <View style={tw`${!origin && "opacity-20"}`}>
        
         <Text style={tw`mt-2 text-2xl font-bold`}>{item.title}</Text>
         <Icon 
         style={tw`p-3 bg-black rounded-full `}
         name="arrowright" color="white" type="antdesign"/>
     </View>
    </TouchableOpacity>
     
    
    )}
    />
  )
}

export default NavOptions