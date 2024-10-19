import express from "express";
import { getExchangeRate } from "../controllers/exchangeRateController.js";

const router = express.Router();

// import apicache from "apicache";
// const cache = apicache.middleware;

router.get(
    "/exchange-rate",
    getExchangeRate
    // cache("1 minute") - cache moved to service
);

export default router;
