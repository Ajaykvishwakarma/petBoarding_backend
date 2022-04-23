const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://ajaykv:ajaykv@cluster0.zd9x5.mongodb.net/petBoarding?retryWrites=true&w=majority"
        // "mongodb://localhost:27017/petBoarding"
    );
};
// const mongoDB = "mongodb://localhost:27017/apartmentmanagement";
// module.exports = () => mongoose.connect(mongoDB)
module.exports = connect;