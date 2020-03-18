// Require necessary NPM packages
const express = require('express');
//Require Mongoose Model for machine
const Machine= require('../models/machine');
//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/machine
 * Description:   Get all machine items 
 */
router.get("/api/machine", (req, res) => {
   
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
 * URI:           /api/machine
 * DEscriptin:   Create A New machine
 */
router.post('/api/machine',(req,res)=>{
   
    Machine.create(req.body.machine)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new machine
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