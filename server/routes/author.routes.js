// 4)
// When we call on the url it will take us to the controller and modify the data
const AuthorsController = require("../controllers/authors.controller");

module.exports = app => { //app shows what kind of req we are doing and what we are doing with that req
    app.get("/api/authors", AuthorsController.findAllAuthors); //so we call on the const above, and then activated the method
    app.get("/api/author/:id", AuthorsController.findOneAuthor);
    app.post("/api/author/new", AuthorsController.createNewAuthor);
    app.put("/api/author/update/:id", AuthorsController.updateAuthor);
    app.delete("/api/author/delete/:id", AuthorsController.deleteAuthor);
}
