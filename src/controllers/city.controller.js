const express = require("express");

const City = require("../models/city.model");


const router = express.Router()

// router.post('/pet', async(req, res) => {
//     try{
//         const pet = await Pet.create(req.body);
//         return res.status(200).send({pet})
//     } catch (error) {
//         return res.status(500).send({
//             message : error.message
//         })
//     }
// });

router.post('/city', async(req, res) => {
    try{
        const city = await City.create(req.body);
        return res.status(200).send(city)
    } catch (error) {
        return res.status(500).send({
            message : error.message
        })
    }
})



router.get('/city/:id', async(req, res) => {
    try {
        const city = await City.findById(req.params.id).lean().exec();
        return res.status(200).send({city})
    } catch ( error) {
        return res.status(500).send({
            message : error.message
        })
    }
});



router.get('/cities', async( req, res ) => {
    try {
        const city = await City.find().lean().exec();
        // console.log("Hii")
       
        return res.status(200).send({city});
    } catch (error) {
        return res.status(500).send({
            message : error.message
        })
    }
}) 

module.exports = router;