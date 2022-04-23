const express = require("express");

const cors = require("cors");

const connect = require("./configs/db");

const petController  = require('./controllers/pet.controller');
const cityController = require('./controllers/city.controller')
const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use('/', petController)
app.use('/', cityController)
module.exports = () => {
    app.listen(PORT, async () => {
        try {
            await connect();
            console.log("Running on port " + PORT + "...");
    
        } catch (error) {
            console.log({
                message : error.message,
                status : "something goes wrong..."
            })
        }
     
    })
}