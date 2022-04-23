const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
    {
       
        city: {type:String, required: true},
        
    },{
        versionKey: false,
        timestamps : true,
    }
)

module.exports = mongoose.model("city", petSchema);