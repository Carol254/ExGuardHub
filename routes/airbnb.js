const express = require('express');
const router = express.Router();
const Bnb = require('../models/airbnb');



// Get all bnb
router.get('/', async (req, res) => {
    try {
        const bnb = await Bnb.find(); // Fetch all documents
        console.log(bnb); // Log to terminal
        res.status(200).send(bnb); // Send response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: error.message });
    }
});




module.exports = router;
