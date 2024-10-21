import express from "express";
import { createTransaction, getAllTransactions } from "../controllers/transactionController.js";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 10,
    message: {
        error: "Wait a minute and try again.",
    },
});

const router = express.Router();

router.post("/transaction", limiter, createTransaction);

router.get("/transactions", limiter, getAllTransactions);

export default router;
