import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
  const stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity 
      onPress={()=> navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
      <stack.Navigator>
        <stack.Screen
        name="NavigateCard"
        component={NavigateCard}
        options={{
          headerShown:false,
        }}
        />
         <stack.Screen
        name="RideOptionsCard"
        component={RideOptionsCard}
        options={{
          headerShown:false,
        }}
        />
      </stack.Navigator>
      </View>
    </View>
  

  )
}

export default MapScreen

const styles = StyleSheet.create({})