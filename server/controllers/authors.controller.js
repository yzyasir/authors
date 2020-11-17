// 3)
// In controllers we modify our data, this is where our logic happens

const Author = require("../models/authors.model"); //after exporting author, we now connect it here

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({authors: allAuthors}))
        .catch(err => res.json({message: "Yasir, something went wrong", error: err}))
}

module.exports.findOneAuthor = (req, res) => {//can name findAllAuthors anything

    console.log(`getting id ${req.params._id}`)

    Author.findOne({_id: req.params.id}) //Author is the collection name that is why we use it
           .then(oneAuthor => res.json({author: oneAuthor}))
           .catch(err => res.json({message: "Yasir, something went wrong", error: err}));
}

module.exports.createNewAuthor = (req, res) => {//can name findAllAuthors anything
    Author.create(req.body) //request body helps us make a new joke
           .then(newAuthor => res.json({author: newAuthor}))
           .catch(err => res.json({message: "Yasir, something went wrong", error: err}));
}

module.exports.deleteAuthor = (req, res) => {//can name findAllAuthors anything
    Author.remove({_id: req.params.id}) 
           .then(res.json({message: "You deleted an author"}))
           .catch(err => res.json({message: "Yasir, something went wrong", error: err}));
}

module.exports.updateAuthor = (req, res) => {//can name findAllAuthors anything
// ____________________________________________________________________________________
    Author.update({_id: req.params.id}, { //mongodb uses _id to refer to the id 
        $set: {                             //changed findOneAndUpdate to just update
            name: req.body.name,
            age: req.body.age,
        }
    }, {runValidators: true}) 
           .then(updatedAuthor => res.json({author: updatedAuthor}))
           .catch(err => res.json({message: "Yasir, something went wrong", error: err}));
}