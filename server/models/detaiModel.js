const mongoose = require('mongoose')


const detaiSchema = new mongoose.Schema({
    madetai:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    tendetai:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    size:{
        type: Array, 
        min: 35,
        max: 46,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    },
    status: {
        type: String,
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("detai", detaiSchema)