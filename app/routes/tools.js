// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for tool
const Tool= require('../models/tool');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/tool
 * DEscriptin:   Create A New tool
 */
router.post('/api/tool',(req,res)=>{
  
    Tool.create(req.body.tool)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new tool
   .then((newTool)=>{
        res.status(201).json({tool:newTool});
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});


/**
 * Action:        Index
 * Method:        GET
 * URI:           /api/tool
 * Description:   Get all tool items
 */
router.get("/api/tool", (req, res) => {
   
    Tool.find()
      .then(tool => {
        res.status(200).json({ tool: tool });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  });



//Export the Router so we can use it in server.js file
module.exports=router;