// Require necessary NPM packages
const express = require('express');
//Require Mongoose Model for Article
const Machine= require('../models/machine');
//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();
/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/machine
 * Description:   Get An Article by Article ID
 */
router.get("/api/machine", (req, res) => {
    // res.json({message:'get all articles'})
    Machine.find()
      .then(machine => {
        res.status(200).json({ machine: machine });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  });
   /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/articales
 * DEscriptin:   Create A New Articale 
 */
router.post('/api/machine',(req,res)=>{
    // res.json({message: 'cool',q:42 ,data: req.body.coffee});  we know i is work
    Machine.create(req.body.machine)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new article
   .then((newMachine)=>{
        res.status(201).json({machine:newMachine});
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});
//Export the Router so we can use it in server.js file
module.exports=router;