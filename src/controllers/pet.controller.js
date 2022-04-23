const express = require("express");

const Pet = require("../models/pet.model");


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

router.post('/pet', async(req, res) => {
    try{
        const pets = await Pet.create(req.body);
        return res.status(200).send(pets)
    } catch (error) {
        return res.status(500).send({
            message : error.message
        })
    }
})



router.get('/pet/:id', async(req, res) => {
    try {
        const pet = await Pet.findById(req.params.id).lean().exec();
        return res.status(200).send({pet})
    } catch ( error) {
        return res.status(500).send({
            message : error.message
        })
    }
});



router.get('/pets', async( req, res ) => {
    try {
        const pet = await Pet.find().lean().exec();
        // console.log("Hii")
       
        return res.status(200).send({pet});
    } catch (error) {
        return res.status(500).send({
            message : error.message
        })
    }
}) 

module.exports = router;