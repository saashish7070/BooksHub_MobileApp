import express, { Request, Response } from 'express';
import Store from '../models/Store'; // Adjust the path based on your project structure

const router = express.Router();

// Create a new Store
router.post('/', async (req: Request, res: Response) => {
  try {
    const newStore = await Store.create(req.body);
    res.status(201).json(newStore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all Stores
router.get('/', async (req: Request, res: Response) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific Store by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const store = await Store.findById(id);
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }
    res.json(Store);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a Store by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedStore = await Store.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedStore) {
      return res.status(404).json({ error: 'Store not found' });
    }
    res.json(updatedStore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a Store by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedStore = await Store.findByIdAndDelete(id);
    if (!deletedStore) {
      return res.status(404).json({ error: 'Store not found' });
    }
    res.json(deletedStore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
