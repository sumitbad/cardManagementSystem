import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cartRoutes from './routes/cart.js';
import userRoutes from './routes/user.js'; 
import dotenv from 'dotenv'; 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5002;

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, 
};

//middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

//routes
app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes);

//listning
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
