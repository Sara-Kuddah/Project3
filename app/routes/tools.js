// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for Article
const Tool= require('../models/tool');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/articales
 * DEscriptin:   Create A New Articale 
 */
router.post('/api/tool',(req,res)=>{
    // res.json({message: 'cool',q:42 ,data: req.body.tool});  we know i is work
    Tool.create(req.body.tool)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new article
   .then((newTool)=>{
        res.status(201).json({tool:newTool});
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});

//****for testing*****

// {
//     "tool":{
//          "name" : "Chemex Classic Coffee Maker" ,
//       "description" : "Brews Delicious Tasting Coffee" ,
//       "type": "tool" ,
//       "price":  50,
//       "img":"String"
//     }   
//   }

/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/machine
 * Description:   Get An Article by Article ID
 */
router.get("/api/tool", (req, res) => {
    // res.json({message:'get all articles'})
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