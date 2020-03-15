// requier necesssary NPM packeges
const express = require("express");
const mongoose = require("mongoose");
// const cors = require('cors');
// requier route file
const indexRouter = require("./app/routes/index");
const toolRouter = require("./app/routes/tools");
const coffeeRouter = require("./app/routes/coffees");
const machineRouter = require("./app/routes/machines");
const cartRouter = require("./app/routes/carts");
// require DB configuriton file
const db = require("./config/db");
// establish database connicition

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log(" Connected to Mongo ");
});




// Instantion Express Application Object
const app = express();
// Defined the Port for the API to run on
const port = process.env.PORT || 5000;
const reactPort = 3000;
/******* MiddeleWare ************/
/*
// Add bodyParser MiddleWare which will parse JSON requsert 
// into JS object before they reach the route files 
*/
// the method .use sets up middleware for the Express applicition
app.use(express.json());
// set CORS headers on response from this API using the cors
// app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }))
// **** Routes  ****
// mount imported Routers
app.use(indexRouter);
app.use(toolRouter);
app.use(coffeeRouter);
app.use(machineRouter);
app.use(cartRouter);
// start the server to listen for requstes on a given a port
app.listen(port, () => {
  console.log(`coffee store is listining on port ${port}`);
});
/*
C.R.U.D 
     R 
   ....... Read All
   ....... Read one by id 
    Create 
     Read 
   ........  Read All  ..... Index 
   ........  Read by Id .....   Show 
    Update  ............   UPDATE
    Delete ............... DESTROY
*/