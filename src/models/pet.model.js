const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
    {
        name: {type:String, required: true},
        city: {type:String, required: true},
        address: {type:String, required: true},
        cost: {type:Number, required: true},
        rating: {type:Number, required: true},
        verified: {type:String, required: true},
        types: {type:String, required: true},
        size: {type:String, required: true},
        supervision:{type:String, required: true},
        unsepervised: {type:String, required: true},
        sleepPlace: {type:String, required: true},
        poty: {type:String, required: true},
        walks: {type:Number, required: true},
        typeofhome: {type:String, required: true},
        outdoor: {type:String, required: true},
        emergency:{type:String, required: true},
        summary: {type:String, required: true},
        capacity: {type:Number, required: true},
        
    },{
        versionKey: false,
        timestamps : true,
    }
)

module.exports = mongoose.model("pet", petSchema);