const mongoose = require('mongoose');

const bnbSchema = new mongoose.Schema({}, { collection: 'listingsAndReviews' });

module.exports = mongoose.model('Bnb', bnbSchema);


