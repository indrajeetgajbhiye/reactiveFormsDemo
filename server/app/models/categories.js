const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    caption: String ,
    color: String,
    isDefault: Boolean 
}, {
    timestamps: true
});

module.exports = mongoose.model('category', categorySchema);