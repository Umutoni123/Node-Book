const Book = require('../models/bookModel')

exports.checkBook = async (req, res, next) =>{
    let book;

    try {
        book = await Book.findById(req.params.id)
        if(!book){
            return res.status(404).json({message: "the book not found"});
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    req.book = book
    next()
};