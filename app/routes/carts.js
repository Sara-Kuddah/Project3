// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for Article
const Cart= require('../models/cart');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/articales
 * DEscriptin:   Create A New Articale 
 */
router.post('/api/cart',(req,res)=>{
    // res.json({message: 'cool',q:42 ,data: req.body.coffee});  we know i is work
    Cart.create(req.body.Cart)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new article
   .then((newCart)=>{
        res.status(201).json({cart : "added "});
        
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});

/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/machine
 * Description:   Get An Article by Article ID
 */
router.get("api/cart", (req, res) => {
    // res.json({message:'get all articles'})
    Cart.find()
      .then(cart => {
        res.status(200).json({ cart: cart });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  });


//Export the Router so we can use it in server.js file
module.exports=router;