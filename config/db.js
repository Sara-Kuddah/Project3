// Creating a base name for the MongoDB
const mongooseBaseName = 'coffeeStore';

// Create the MongoDB URI for Development and Test

const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`,
}



// Identify if devlopment environment is Test or devlopment 
//select DB based on wether a test file was executed before `server`

const localDB = process.env.TESTENV ? database.test : database.development ; 

// Enviroment varibale MONGODB_URI will be avalible in 
// heroku producition environment , otherwise use test or devlopment 
const currentDB = process.env.MONGODB_URI || localDB ; 


// export the approprite database based on the current environment 
module.exports = currentDB ; 