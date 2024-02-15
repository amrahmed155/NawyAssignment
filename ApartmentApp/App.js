// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApartmentsListScreen from './screens/ApartmentsListScreen';
import ApartmentDetailsScreen from './screens/ApartmentDetailsScreen';
import AddApartmentScreen from './screens/AddApartmentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ApartmentsList" component={ApartmentsListScreen} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetailsScreen} />
        <Stack.Screen name="AddApartment" component={AddApartmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
