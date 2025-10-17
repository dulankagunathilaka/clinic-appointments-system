import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import router from './routes/PatientRoutes.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use('/api/patients', router);

// Test route
app.get('/', (req, res) => {
  res.send('API Working ');
});

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
