// 2)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//here we make our models, aka what we are expecting to put into our project db

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Gotta have a name"], //this here is our VALIDATION
        minlength: [2, "The name must be at least 2 characters"]
    },
    age: {
        type: Number,
        required: [true, "Need to have an age"], //this here is our VALIDATION
        minlength: [1, "The age must be at least 1 character"]
    }
}, {timestamps: true}); //shows when it was created

const Author = mongoose.model("Author", AuthorSchema); //putting Product Schema into the parameter here

module.exports = Author; //we now export it so other files can use it, 
// WE NAMED THIS WHOLE COLLECTION PRODUCT

// Going to do validations here too above ^^^^