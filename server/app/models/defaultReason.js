const mongoose = require('mongoose');

const reasonSchema = mongoose.Schema({
    caption: String ,
    hasChild: Boolean,
    type: String,
    isDeleted: Boolean,
    category : String 
}, {
    timestamps: true
});

module.exports = mongoose.model('defaultReason', reasonSchema);