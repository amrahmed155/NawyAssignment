import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const ApartmentDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [apartment, setApartment] = useState([]);
  useEffect(() => {
    // Fetch apartment details from API based on ID
    axios
      .get(`http://192.168.1.9:3000/apartments/${id}`)
      .then((response) => {
        setApartment(response.data);
      })
      .catch((error) =>
        console.error("Error fetching apartment details:", error)
      );
  }, [id]);

  if (apartment.length==0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      {apartment.map((elem) => {
        return (
          <View style={{ flex: 1, padding: 20 } }>
            <Text>Name: {elem.name}</Text>
            <Text>Description: {elem.description}</Text>
            <Text>Price: ${elem.price}</Text>
            <Text>amenities:</Text>
            {elem.amenities.map((amenity,index) =>{return(<Text key={index}>{amenity}</Text>)})}
          </View>
        );
      })}
    </>
  );
};

export default ApartmentDetailsScreen;
