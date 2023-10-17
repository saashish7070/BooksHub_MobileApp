import express, { Request, Response } from 'express';
import Book from '../models/Book'; // Adjust the path based on your project structure
import { deleteBook, displayBooks, findBook, newBooks, updateBook } from '../controllers/book';

const router = express.Router();

// Create a new book
router.post('/', newBooks);

// Get all books
router.get('/', displayBooks);

// Get a specific book by ID
router.get('/:id', findBook);

// Update a book by ID
router.put('/:id', updateBook);

// Delete a book by ID
router.delete('/:id', deleteBook);

export default router;
