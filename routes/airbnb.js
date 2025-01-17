const express = require('express');
const router = express.Router();
const Bnb = require('../models/airbnb');

// Create a new bnb
router.post('/', async (req, res) => {
    try {
        const bnb = new Bnb(req.body);
        await bnb.save();
        res.status(201).send({ message: 'User created successfully!', bnb });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get all bnb
router.get('/', async (req, res) => {
    try {
        const bnb = await Bnb.find(); // Fetch all documents from listingsAndReviews
        res.send(bnb);
        console.log(bnb);
        
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


module.exports = router;
