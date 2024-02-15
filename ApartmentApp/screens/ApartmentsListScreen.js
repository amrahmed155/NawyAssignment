import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity ,Button} from 'react-native';
import axios from 'axios';

const ApartmentsListScreen = ({ navigation }) => {
  const [apartments, setApartments] = useState([]);
const dataLoader=()=>{ axios.get('http://192.168.1.9:3000/apartments')
.then(response => {setApartments(response.data);})

.catch(error => console.error('Error fetching data:', error));}
  useEffect(() => {
    // Fetch apartments data from API
    dataLoader();
  }, []);


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ApartmentDetails', { id: item.id })}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  const handleAddApartment = () => {
    navigation.navigate('AddApartment');
  };
  return (
    <View style={{ flex: 1 }}>
      <Button title="Add Apartment" onPress={handleAddApartment} />
      <Button title="reload Data" onPress={dataLoader} />
      <FlatList
        data={apartments}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

    </View>
  );
};

export default ApartmentsListScreen;
