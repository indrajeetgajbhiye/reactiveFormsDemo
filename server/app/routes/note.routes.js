module.exports = (app) => {
    const product = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/product', product.create);

    // Retrieve all Notes
    app.get('/product', product.findAll);
    app.get('/getAllCategories', product.getAllCategories);
    app.post('/addCatergory', product.addCategory)
    app.post('/defaultReasons', product.addDefaultReason)
    app.get('/defaultReasons', product.getDefaultReason)
    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}