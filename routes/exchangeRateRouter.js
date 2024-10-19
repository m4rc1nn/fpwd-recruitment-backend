import express from "express";
import { getExchangeRate } from "../controllers/exchangeRateController.js";
import apicache from "apicache";

const router = express.Router();
const cache = apicache.middleware;

router.get(
    "/exchange-rate",
    cache("1 minute"),
    getExchangeRate
);

export default router;
