"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
var express_1 = require("express");
var body_parser_1 = require("body-parser");
// Initialize Express app
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Dummy data for apartments
var apartments = [
    { id: 1, name: 'Apartment 1', description: 'Cozy apartment in the city center', price: 1000 },
    { id: 2, name: 'Apartment 2', description: 'Spacious apartment with a view', price: 1500 },
];
// Dummy data for apartment details
var apartmentDetails = {
    1: { id: 1, name: 'Apartment 1', description: 'Cozy apartment in the city center', price: 1000, location: 'City Center', amenities: ['WiFi', 'Air Conditioning'] },
    2: { id: 2, name: 'Apartment 2', description: 'Spacious apartment with a view', price: 1500, location: 'Suburbs', amenities: ['Balcony', 'Swimming Pool'] },
};
// API endpoint for listing apartments
app.get('/apartments', function (req, res) {
    res.json(apartments);
});
// API endpoint for getting apartment details
app.get('/apartments/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var apartment = apartmentDetails[id];
    if (apartment) {
        res.json(apartment);
    }
    else {
        res.status(404).json({ error: 'Apartment not found' });
    }
});
// API for adding apartments
app.post('/apartments', function (req, res) {
    var _a = req.body, name = _a.name, description = _a.description, price = _a.price;
    if (!name || !description || !price) {
        res.status(400).json({ error: 'Please provide name, description, and price for the apartment' });
        return;
    }
    var id = apartments.length + 1;
    var newApartment = { id: id, name: name, description: description, price: price };
    apartments.push(newApartment);
    apartmentDetails[id] = __assign(__assign({}, newApartment), { location: '', amenities: [] });
    res.status(201).json(newApartment);
});
// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
