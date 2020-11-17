// 1-4)
const express = require("express");
const app = express(); 
const port = 8000;
// ______________________________________________________________
const cors = require('cors'); //what is cors doing? it is the ability to make cross origin requests, this is so our backend can talk to our frontend
app.use(cors()); //this is droppinf it into express
// ______________________________________________________________
// needs connection to mongoose to do anything, the thing below
require("./server/config/mongoose.config"); //takes everything we wrote in mongoose config and sees it if it all works
//should see the line show it works (the console.log)

// ______________________________________________________________ 
app.use(express.json(), express.urlencoded({extended: true})); //this is specific to using post req, helps in dealing with post requests
// he called the above line of code middleware

const AllAuthorRoutes = require("./server/routes/author.routes"); //this is made after routes are made
AllAuthorRoutes(app); //here we passed it app from express
//the above code finish ups our connections
// ______________________________________________________________



app.listen(port, ()=>console.log(`Yasir is listening on port: ${port}!`));