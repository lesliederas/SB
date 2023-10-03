import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView} from 'react-native';
import { Provider } from 'react-redux';
import {store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={Platform.OS==="ios"? "padding": "height"}
        style={{flex:1}}
        keyboardVerticalOffset={Platform.OS=="ios"? -64:0}
        >
        <stack.Navigator>
          <stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          />
          <stack.Screen
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown: false,
          }}
          />
        </stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
</Provider>
  );
}


