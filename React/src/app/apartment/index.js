
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from '../component/listing.tsx'
const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/apartments');
        setApartments(response.data);
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    };

    fetchApartments();
  }, []);

  return (
    
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    {apartments.map(apartment => (
            <Listing key={apartment.id} apartmentsList={
              {
              'id':apartment.id,
              'price':apartment.price,
              'title':apartment.name,
              'subTitle':apartment.description,
              }}/>
           
        ))}
        </div>
    
  );
};

export default Apartments;
