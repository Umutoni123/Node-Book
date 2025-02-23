const Book = require('../models/bookModel')

//Get all books
exports.getBooks = async (req, res) =>{
    try {
        const books = await Book.find();
        res.json(books)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Create a new book
exports.createBook = async (req,res) =>{

    const newBook = new Book({
        name: req.body.name,
        bookType: req.body.bookType
    })

    try {
        const bookCreated = await newBook.save()
        res.status(201).json(bookCreated)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Get a single user
exports.getbook = async (req,res) =>{
    res.json(req.book)
}