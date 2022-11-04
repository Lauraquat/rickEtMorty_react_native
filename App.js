import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListItemScreen from './src/screen/ListItemScreen';
import DetailItemScreen from './src/screen/DetailItemScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListItemScreen} />
        <Stack.Screen name="Detail" component={DetailItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App