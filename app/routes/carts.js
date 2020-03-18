// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for cart
const Cart= require('../models/cart');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/cart
 * DEscriptin:   Create A New item in cart 
 */
router.post('/api/cart',(req,res)=>{
    Cart.create(req.body.cart)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new item in cart
   .then((newCart)=>{
     
        res.status(201).json({cart : newCart});
        
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});

/**
 * Action:        Index
 * Method:        GET
 * URI:           /api/cart
 * Description:   Get all  items from cart 
 */
router.get("/api/cart", (req, res) => {
    Cart.find()
      .then(cart => {
        res.status(200).json({ cart: cart });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  });



/**
 * Action:       DESTROY
 * Method:       DELETE
 * URI:          /api/cart/5d66b8b68b
 * DEscriptin:   Delete An item from cart  by the ID
 */
router.delete('/api/cart/:id',(req,res)=>{
  Cart.findById(req.params.id)
  .then((cart)=>{
    if(cart){ 
        //Pass the resulte og Mongoose`s .delete method to the next then
        return cart.remove();
    }else{
        //if we couldnt fine a document with the matching ID
        res.status(404).json({
            error:{
                name:'DocumentNot FoundError',
                message:'The provided ID Doesn\`t match any documents'
            }
        });
    }
 })
    .then(()=>{
 //If the deletion succeeded, return 204 and no JSON
  res.status(204).end();
  })
 
  .catch((error)=>{
     res.status(500).json({error:error});
     console.log(" not delete ")
  });
 });

/**
 * Action:       DESTROY
 * Method:       DELETE
 * URI:          /api/cart
 * DEscriptin:   Delete all items from cart
 */


 router.delete('/api/cart',(req,res)=>{
  Cart.remove()
  .then((cart)=>{
    res.status(204).end();
  })
 
  .catch((error)=>{
     res.status(500).json({error:error});
  });
 });


 
/*
*Action:.......UPDATE
*Method:.......PATCH
*URI: ......../api/cart/5d664b8b4f5092aba18e9 
*Descriptions:......UPdate An item in the  cart by  ID
 */

router.patch('/api/cart/:id',(req,res)=>{
  Cart.findById(req.params.id)

  .then((cart)=>{
      if(cart){
         
         return cart.update(req.body.cart);
      }else{
          req.status(404).json({
              error:{
              name:'DocumentNotFoundError',
              message:'The provided Id Does\'t match any document '
          }
         })
      }

  })
  .then(()=>{
      res.status(200).json({ sucess:{
        name:'Documentupdated',
        message:'The document has been updated'
    }})
  })
  .catch((error)=>{
      res.status(500).json({error:error})
  })
})

 

//Export the Router so we can use it in server.js file
module.exports=router;