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
    Cart.create(req.body.cart)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new article
   .then((newCart)=>{
        res.status(201).json({cart : newCart});
        
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});

// {
// 	"cart":{
// 		"itemId" : "66" ,
//     "totalprice" : 400 ,
//     "name": "Ar",
//     "price": 400, 
//     "amount" : 1 ,
//     "img": "String"
// 	} 
//   }

/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /api/machine
 * Description:   Get An Article by Article ID
 */
router.get("/api/cart", (req, res) => {
    // res.json({message:'get all articles'})
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
 * DEscriptin:   Delete An Articale  by Article ID
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
  });
 });




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
*Descriptions:......UPdate An cart by cart ID
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

/*
*Action:.......SHOW
*Method:.......GET
*URI: ......../api/cart/itemid 
*Descriptions:......Git An cart by cart NAME
 */

router.get('/api/cart/:id',(req,res)=>{
  Cart.find(req.params.id)

  .then((cart)=>{
      if(cart){
         return res.status(200).json({ sucess:{
          name:'Documentexist',
          message:'The item is already in your cart '
      }})
    }else{
         return  res.status(200).json({ sucess:{
          name:'Documentnotexist',
          message:'The item will add to your cart '
      }
  })
  .catch((error)=>{
      res.status(500).json({error:error})
  })
}
  })
})

 

//Export the Router so we can use it in server.js file
module.exports=router;