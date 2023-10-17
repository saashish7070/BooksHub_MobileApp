import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from '../routes/book'; // Adjust the path based on your project structure
import userRoutes from '../routes/user'
import storeRoutes from '../routes/store'

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

const port = process.env.PORT || 8000;
const database = process.env.MONGO_URI as string;

// Connect to MongoDB
mongoose.connect(database);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the book routes
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/stores', storeRoutes);
// Your other middleware and routes can go here...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
