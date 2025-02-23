const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')
const {checkBook} = require('../middleware/middleware')


router.get('/', bookController.getBooks)
router.get('/:id', checkBook ,bookController.getbook)
router.post('/', bookController.createBook)
router.patch('/:id', checkBook, bookController.updateBook)
router.delete('/:id', checkBook, bookController.deleteBook)
module.exports = router