import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const axiosInstance = axios.create({
    baseURL: process.env.EXCHANGE_API_URL,
    headers: {
        "x-api-key": process.env.EXCHANGE_API_KEY,
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
