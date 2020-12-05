var express = require('express');
var router = express.Router();
const Alien= require('../models/alien')

router.get('/', async(req, res, next)=> {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
        res.sendStatus(200)
    } catch (error) {
        res.send("Error fetching data")
    }
});

router.post('/', async(req, res, next)=> {
    try {
        const alien = new Alien({
            name: req.body.name,
            subscription: req.body.subscription,
            tech: req.body.tech
        })
        const savedAlien = await alien.save()
        res.json(savedAlien)
        res.sendStatus(201)
    } catch (error) {
        res.send("Error saving data")
    }
});

router.put('/:id', async (req, res) => {
    try {
    alienData={
        name: req.body.name,
        subscription: req.body.subscription,
        tech: req.body.tech
    }
   Alien.findOneAndUpdate({_id:req.params.id}, 
      { $set: alienData }, { new: true }, (err,alien) => {
          if (err) {
              res.json("error updating data")
          }
          res.json(alien)
        })
 } catch (error) {
     res.send()
 }   
})


module.exports = router;