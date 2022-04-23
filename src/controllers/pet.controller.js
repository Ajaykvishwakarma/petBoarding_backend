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



// router.get('/pets', async( req, res ) => {
//     try {
//         const pet = await Pet.find().lean().exec();
//         // console.log("Hii")
       
//         return res.status(200).send({pet});
//     } catch (error) {
//         return res.status(500).send({
//             message : error.message
//         })
//     }
// }) 

router.get('/pets', async (req, res) => {
    try{
    const page = req.query.page || 1
    const limit = req.query.limit || 8
    let pets = await Pet.find().skip((page - 1)  *limit).limit(limit).lean().exec()


    const totalDocs = await Pet.find().countDocuments()   // flat.length || 0

    const totalPages = (Math.ceil(totalDocs / limit))

    let arr = [];

    // console.log({flats})
     for(let i = 1; i<= totalPages; i++) {

        arr.push(i);
     }

        if(req.query.q) {
            if(req.query.q == 'sort') {
                pets = req.query.sort == 1 ? pets.sort((a, b) => (a.no - b.no)) : pets.sort((a, b) => (b.no - a.no))
            }
             
            else if(req.query.q == 'filter') {
                pets = pets.filter(pet => pet.type == req.query.base)
            }
            else if( req.query.q == 'search'){
                pets = pets.filter(pet => pet.block == req.query.block)
            }
        }
        // console.log({flats})
        return res.status(200).send({
            pets, totalPages : arr
        })
     
        } catch (error ) {
            return res.status(500).send({message : error.message})
        }
})

module.exports = router;