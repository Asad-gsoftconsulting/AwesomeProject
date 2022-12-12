import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Aboutscreen from '../screens/About';
import HomeScreen from '../screens/Home';



const Stack = createNativeStackNavigator();

function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={Aboutscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponent