
'use client'
import React, { useState, useEffect } from 'react';
import {usePathname , useRouter } from 'next/navigation';
import axios from 'axios';
import Layout from"../../layout/main"
import Image from "next/image";

const ApartmentDetails = () => {
  const Pathname = usePathname ();
  const FolderTree=Pathname.split('/')
  const id= FolderTree[FolderTree.length-1]
  const [apartment, setApartment] = useState([]);
  useEffect(() => {
    const fetchApartment = async () => {
    
      try {
        const response = await axios.get(`http://localhost:3000/apartments/${id}`);
        setApartment(response.data);
      } catch (error) {
        console.error('Error fetching apartment details:', error);
      }
    };

    if (id) {
      fetchApartment();
    }
  }, [id]);

  if (!apartment) {
    return <div>Loading...</div>;
  }
const paragraphStyle={fontSize:'18px',fontWeight:'light'} 
 return (
    <Layout>
      
{apartment.map((elem)=>{return( <div key={elem.id}>
  <Image
                src="/asset.png"
                alt="NAWY Logo"
                className="dark:invert"
                width={500}
                height={500}
                priority
              />
          <h1 style={{textAlign:'center',fontSize:'20px',fontWeight:'bold'}}>Apartment Details</h1>
          <p style={paragraphStyle}>{elem.name}</p>
          <p style={paragraphStyle}>Description: {elem.description}</p>
          <p style={paragraphStyle}>Price: {elem.price}</p>
        </div>)})
        
        }
       
      </Layout>

  );
};

export default ApartmentDetails;
