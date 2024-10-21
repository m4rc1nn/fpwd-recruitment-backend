import dotenv from "dotenv";
import axiosInstance from "../config/axiosInstance.js";
import { broadcast } from "../app.js";

dotenv.config();

let cachedRate = null;
let cacheTimestamp = null;
const CACHE_DURATION = 60 * 1000;

export const getExchangeRate = async () => {
    const now = Date.now();

    if (cachedRate && now - cacheTimestamp < CACHE_DURATION) {
        return cachedRate;
    }

    try {
        const response = await axiosInstance.get("/");
        const newRate = response.data.exchange_rate;

        if (newRate !== cachedRate) {
            broadcast({ type: "exchange_rate_changed", data: { new_exchange_rate: newRate } });
            cachedRate = newRate;
            cacheTimestamp = now;
        }

        return cachedRate;
    } catch (error) {
        throw new Error("Server error while fetching exchange rate");
    }
};

const checkExchangeRate = async () => {
    try {
        await getExchangeRate();
        const now = Date.now();
        const nextCheckInterval = Math.max(1000, CACHE_DURATION - (now - cacheTimestamp));
        setTimeout(checkExchangeRate, nextCheckInterval);
    } catch (error) {
        console.error("Server error while checking exchange rate:", error);
        setTimeout(checkExchangeRate, 1000);
    }
};

checkExchangeRate();
