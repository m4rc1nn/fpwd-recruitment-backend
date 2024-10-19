import express from 'express';
import { createTransaction, getAllTransactions } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/transaction', createTransaction);

router.get('/transactions', getAllTransactions);

export default router;