// backend/src/routes/cart.js
import express from 'express';
import { getCart, addItemToCart, removeItemFromCart } from '../controllers/cartController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateUser, getCart);
router.post('/add', authenticateUser, addItemToCart);
router.delete('/remove/:itemId', authenticateUser, removeItemFromCart);

export default router;
