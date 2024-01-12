import express from 'express';

import dotenv from 'dotenv';

import cors from 'cors';

import connectDB from './config/db.js'

dotenv.config();

import products from './data/products.js';

//const express = require(express);

//const port = 5000;

const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB

const app = express();

app.use(cors({

    origin: "http://localhost:3000",

}))
app.get('/', (req, res) => {
    
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {

    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    
    const product = products.find(p => p._id === req.params.id);

    res.json(product);
})

app.listen(port, () => console.log(`Server running on port ${port}`));