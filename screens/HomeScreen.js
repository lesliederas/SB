import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavorites from '../components/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import  {setDestination, setOrigin} from "../slices/navSlice";


const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-green-700 h-full`}>
      <Text style={tw`text-center py-3 font-bold text-xl underline`}>Smart</Text>
    <View style={tw`p-3`}>
        <GooglePlacesAutocomplete
        placeholder="Where From?"
        styles={
          {
            container:{
              flex: 0,
            },
            textInput: {
              fontSize: 18,
          },
        }}
        fetchDetails={true}
        onPress={(data,details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          }))
          dispatch(setDestination(null))
        }}
        
        returnKeyType={"Search"}
        enablePoweredByContainers={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          languages:'en'
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />

     <NavOptions/>
     <NavFavorites/>
     </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})