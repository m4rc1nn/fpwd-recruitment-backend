import dotenv from "dotenv";
import axiosInstance from "../config/axiosInstance.js";

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
        cachedRate = response.data.exchange_rate;
        cacheTimestamp = now;
        return cachedRate;
    } catch (error) {
        throw new Error("Failed to fetch exchange rate");
    }
};
