// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for coffee
const Coffee= require('../models/coffee');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/coffee
 * DEscriptin:   Create A New coffee item 
 */
router.post('/api/coffee',(req,res)=>{
    Coffee.create(req.body.coffee)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new coffee
   .then((newCoffee)=>{
        res.status(201).json({coffee:newCoffee});
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});

/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/coffee
 * Description:   Get all coffe items 
 */
router.get("/api/coffee", (req, res) => {
   
    Coffee.find()
      .then(coffee => {
        res.status(200).json({ coffee: coffee });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  });


//Export the Router so we can use it in server.js file
module.exports=router;