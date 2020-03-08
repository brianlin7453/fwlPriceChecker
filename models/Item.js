const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    item_code: {
        type: String,
        unique: true,
        required: true
    },
    item_type: {
        type: String,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);