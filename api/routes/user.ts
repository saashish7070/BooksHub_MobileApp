// import express, { Request, Response } from 'express';
// import User from '../models/User'; // Adjust the path based on your project structure

// const router = express.Router();

// // Create a new user
// router.post('/users', async (req: Request, res: Response) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Get all users
// router.get('/users', async (req: Request, res: Response) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Get a specific user by ID
// router.get('/users/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Update a user by ID
// router.put('/users/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Delete a user by ID
// router.delete('/users/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(deletedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// export default router;
