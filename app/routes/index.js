
// require necessary NOM packege 

const express = require('express');

// Instantiate a router ( mini app that only handles routes )
const router = express.Router()


/*
* Action :     Index
* Method :      Get 
* URI :      / 
* Descripition : Get the Root Route
*/

router.get('/',(req,res)=> {
res.json({

    message : " Welcome to coffee strore "

});
});




// export the router so we can use it in the server.js file 
module.exports = router ; 
