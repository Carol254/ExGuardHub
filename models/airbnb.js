const mongoose = require('mongoose');

const bnbSchema = new mongoose.Schema(
    {},
    { collection: 'listingsAndReviews' } // Explicitly set the collection name
);

module.exports = mongoose.model('Bnb', bnbSchema);

