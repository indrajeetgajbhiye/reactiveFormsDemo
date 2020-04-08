const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: String ,
    hasChild: Boolean,
    reasons: [],
    isDeleted: Boolean 
}, {
    timestamps: true
});

module.exports = mongoose.model('product', productSchema);