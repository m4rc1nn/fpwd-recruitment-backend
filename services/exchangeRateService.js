import dotenv from 'dotenv';
import axiosInstance from '../config/axiosInstance.js';

dotenv.config();

export const getExchangeRate = async () => {
    try {
        const response = await axiosInstance.get("/");
        return response.data.exchange_rate;
    } catch (error) {
        throw new Error("Failed to fetch exchange rate");
    }
};
