import express from 'express';
import { deleteStore, displayStores, findStore, newStore, updateStore } from '../controllers/store';


const router = express.Router();

// Create a new Store
router.post('/', newStore);

// Get all Stores
router.get('/', displayStores);

// Get a specific Store by ID
router.get('/:id', findStore);

// Update a Store by ID
router.put('/:id', updateStore);

// Delete a Store by ID
router.delete('/:id', deleteStore);

export default router;
