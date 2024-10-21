import express from "express";
import { getExchangeRate } from "../controllers/exchangeRateController.js";
import { rateLimit } from 'express-rate-limit'

const router = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 10,
    message: {
        error: "Wait a minute and try again.",
    },
});

router.get(
    "/exchange-rate",
    limiter,
    getExchangeRate
);

export default router;
