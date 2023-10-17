import express, { Request, Response } from 'express';
import Book from '../models/Book'; // Adjust the path based on your project structure



export const newBooks = async (req: Request, res: Response) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  export const displayBooks = async (req: Request, res: Response) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

export const findBook =async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ error: 'Book is not in database' });
      }
      res.json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(deletedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }