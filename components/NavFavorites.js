import { FlatList, StyleSheet,TouchableOpacity, Text,View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist';
import tw from "tailwind-react-native-classnames";
import { useDispatch } from 'react-redux';
import  {setDestination, setOrigin} from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';
import{GOOGLE_MAPS_APIKEY} from "@env";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data =[
{
    id:"456",
    icon: "home",
    location:"Home",
    destination: "Paces avenue, Matthews, NC",
},
 {
        id:"789",
        icon: "school-outline",
        location:"EPIC at University of NC charlotte",
        destination:"8700 Phillips Road, Charlotte, NC",
    },
];
const NavFavorites = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
  return <FlatList 
  data={data}
   keyExtractor={(item) => item.id} 
   renderItem={({item: { location, destination, icon}, item}) => (
    <TouchableOpacity 
    style={tw`flex-row items-center p-5`}>
        <Icon
        styles={tw`mr-4  bg-black p-2`}
        name={icon}
        type="ionicon"
        color="gray"
        size={40}
        />
        
        <View>
            <Text style={tw`font-semibold text-lg`}> {location}</Text>
            <Text style={tw`text-black`}>  {destination}</Text>
        </View>
    </TouchableOpacity>
  )}/>;
};

export default NavFavorites

const styles = StyleSheet.create({})