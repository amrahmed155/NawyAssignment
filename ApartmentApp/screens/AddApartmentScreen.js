import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddApartmentScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    // Send data to the API to add new apartment
    axios.post('http://192.168.1.9:3000/apartments', {
      name,
      description,
      price: parseFloat(price)
    })
    .then(response => {
      console.log('Apartment added successfully:', response.data);
      // Reset form fields
      setName('');
      setDescription('');
      setPrice('');
    })
    .catch(error => console.error('Error adding apartment:', error));
  };
  
  
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddApartmentScreen;
