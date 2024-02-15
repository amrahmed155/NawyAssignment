// Import necessary modules
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const cors = require('cors');
// Define types for apartment and apartment details
interface Apartment {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ApartmentDetails extends Apartment {
  location: string;
  amenities: string[];
}

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Dummy data for apartments
let apartments: Apartment[] = [
    {
        id: 1,
        name: "Apartment 1",
        description: "Cozy apartment in the city center",
        price: 1000000,
      },
      {
        id: 2,
        name: "Apartment 2",
        description: "Spacious apartment with a view",
        price: 1500000,
      },
      {
        id: 3,
        name: "Apartment 3",
        description: "Modern loft with industrial style",
        price: 1200000,
      },
      {
        id: 4,
        name: "Apartment 4",
        description: "Luxurious penthouse overlooking the skyline",
        price: 2500000,
      },
      {
        id: 5,
        name: "Apartment 5",
        description: "Charming studio apartment in historic building",
        price: 800000,
      },
      {
        id: 6,
        name: "Apartment 6",
        description: "Elegant townhouse with garden",
        price: 1800000,
      },
      {
        id: 7,
        name: "Apartment 7",
        description: "Sleek modern apartment with city views",
        price: 2000000,
      },
      {
        id: 8,
        name: "Apartment 8",
        description: "Rustic apartment with mountain views",
        price: 1700000,
      },
      {
        id: 9,
        name: "Apartment 9",
        description: "Beachfront condo with panoramic ocean views",
        price: 3000000,
      },
      {
        id: 10,
        name: "Apartment 10",
        description: "Quaint cottage in a peaceful village",
        price: 700000,
      }, {
        id: 11,
        name: "Apartment 11",
        description: "Modern apartment in a trendy neighborhood",
        price: 1400000,
      },
      {
        id: 12,
        name: "Apartment 12",
        description: "Historic mansion with lush gardens",
        price: 5000000,
      },
      {
        id: 13,
        name: "Apartment 13",
        description: "Chic loft in the heart of downtown",
        price: 2200000,
      },
      {
        id: 14,
        name: "Apartment 14",
        description: "Secluded cabin surrounded by nature",
        price: 900000,
      },
      {
        id: 15,
        name: "Apartment 15",
        description: "Contemporary apartment with river views",
        price: 1800000,
      },
      {
        id: 16,
        name: "Apartment 16",
        description: "Eco-friendly apartment in sustainable community",
        price: 1600000,
      },
      {
        id: 17,
        name: "Apartment 17",
        description: "Traditional house with courtyard",
        price: 1200000,
      },
      {
        id: 18,
        name: "Apartment 18",
        description: "Modern apartment with skyline views",
        price: 2000000,
      },
      {
        id: 19,
        name: "Apartment 19",
        description: "Sunny beach house with oceanfront deck",
        price: 2800000,
      },
      {
        id: 20,
        name: "Apartment 20",
        description: "Coastal apartment with sea views",
        price: 2200000,
      },
];

let apartmentDetails:  ApartmentDetails[] = [
    {
      id: 1,
      name: "Apartment 1",
      description: "Cozy apartment in the city center",
      price: 1000000,
      location: "City Center",
      amenities: ["WiFi", "Air Conditioning"],
    },
    {
      id: 2,
      name: "Apartment 2",
      description: "Spacious apartment with a view",
      price: 1500000,
      location: "Suburbs",
      amenities: ["Balcony", "Swimming Pool"],
    },
    {
      id: 3,
      name: "Apartment 3",
      description: "Modern loft with industrial style",
      price: 1200000,
      location: "Downtown",
      amenities: ["High Ceilings", "Exposed Brick Walls"],
    },
    {
      id: 4,
      name: "Apartment 4",
      description: "Luxurious penthouse overlooking the skyline",
      price: 2500000,
      location: "City Center",
      amenities: ["Spa", "Gym"],
    },
    {
      id: 5,
      name: "Apartment 5",
      description: "Charming studio apartment in historic building",
      price: 800000,
      location: "Old Town",
      amenities: ["Fireplace", "Roof Terrace"],
    },
    {
      id: 6,
      name: "Apartment 6",
      description: "Elegant townhouse with garden",
      price: 1800000,
      location: "Suburbs",
      amenities: ["Garden", "Parking"],
    },
    {
      id: 7,
      name: "Apartment 7",
      description: "Sleek modern apartment with city views",
      price: 2000000,
      location: "City Center",
      amenities: ["Concierge Service", "Fitness Center"],
    },
    {
      id: 8,
      name: "Apartment 8",
      description: "Rustic apartment with mountain views",
      price: 1700000,
      location: "Countryside",
      amenities: ["Mountain View", "Fire Pit"],
    },
    {
      id: 9,
      name: "Apartment 9",
      description: "Beachfront condo with panoramic ocean views",
      price: 3000000,
      location: "Beachfront",
      amenities: ["Private Beach Access", "Infinity Pool"],
    },
    {
      id: 10,
      name: "Apartment 10",
      description: "Quaint cottage in a peaceful village",
      price: 700000,
      location: "Village",
      amenities: ["Garden", "Fireplace"],
    },
    {
      id: 11,
      name: "Apartment 11",
      description: "Modern apartment in a trendy neighborhood",
      price: 1400000,
      location: "Trendy Neighborhood",
      amenities: ["Balcony", "Fitness Center"],
    },
    {
      id: 12,
      name: "Apartment 12",
      description: "Historic mansion with lush gardens",
      price: 5000000,
      location: "Historic District",
      amenities: ["Gardens", "Pool"],
    },
    {
      id: 13,
      name: "Apartment 13",
      description: "Chic loft in the heart of downtown",
      price: 2200000,
      location: "Downtown",
      amenities: ["Exposed Brick", "High Ceilings"],
    },
    {
      id: 14,
      name: "Apartment 14",
      description: "Secluded cabin surrounded by nature",
      price: 900000,
      location: "Forest",
      amenities: ["Wood-Burning Fireplace", "Hiking Trails"],
    },
    {
      id: 15,
      name: "Apartment 15",
      description: "Contemporary apartment with river views",
      price: 1800000,
      location: "Riverside",
      amenities: ["River View", "Pool"],
    },
    {
      id: 16,
      name: "Apartment 16",
      description: "Eco-friendly apartment in sustainable community",
      price: 1600000,
      location: "Sustainable Community",
      amenities: ["Solar Panels", "Community Garden"],
    },
    {
      id: 17,
      name: "Apartment 17",
      description: "Traditional house with courtyard",
      price: 1200000,
      location: "Old Town",
      amenities: ["Courtyard", "Fireplace"],
    },
    {
      id: 18,
      name: "Apartment 18",
      description: "Modern apartment with skyline views",
      price: 2000000,
      location: "City Center",
      amenities: ["City View", "Fitness Center"],
    },
    {
      id: 19,
      name: "Apartment 19",
      description: "Sunny beach house with oceanfront deck",
      price: 2800000,
      location: "Beachfront",
      amenities: ["Ocean View", "Deck"],
    },
    {
      id: 20,
      name: "Apartment 20",
      description: "Coastal apartment with sea views",
      price: 2200000,
      location: "Coastal Town",
      amenities: ["Sea View", "Balcony"],
    },
  ];

// API endpoint for listing apartments
app.get("/apartments", (req: Request, res: Response) => {
  res.json(apartments);
});

// API endpoint for getting apartment details
app.get("/apartments/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const apartment = apartmentDetails.filter(e=>e.id === id);
  console.log(apartment)
  apartment.length>0
    ? res.json(apartment)
    : res.status(404).json({ error: "Apartment not found" });
});

// API for adding apartments
app.post("/apartments", (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    res
      .status(400)
      .json({
        error: "Please provide name, description, and price for the apartment",
      });
    return;
  }

  const id = apartments.length + 1;
  const newApartment: Apartment = { id, name, description, price };
  apartments.push(newApartment);
  apartmentDetails[id] = { ...newApartment, location: "", amenities: [] };

  res.status(201).json(newApartment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
