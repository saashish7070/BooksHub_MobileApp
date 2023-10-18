import express, { Request, Response } from 'express';
import { deleteUser, displayUsers, findUser, newUser, updateUser } from '../controllers/user';

const router = express.Router();

// Create a new user
router.post('/', newUser);

// Get all users
router.get('/',displayUsers);

// Get a specific user by ID
router.get('/:id', findUser);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

export default router;
