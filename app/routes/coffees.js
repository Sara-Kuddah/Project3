// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for Article
const Coffee= require('../models/coffee');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/articales
 * DEscriptin:   Create A New Articale 
 */
router.post('/api/coffee',(req,res)=>{
    // res.json({message: 'cool',q:42 ,data: req.body.coffee});  we know i is work
    Coffee.create(req.body.coffee)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new article
   .then((newCoffee)=>{
        res.status(201).json({coffee:newCoffee});
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});


//Export the Router so we can use it in server.js file
module.exports=router;