require('dotenv').config()
const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: process.env.EXCHANGE_API_URL,
  headers: {
    'x-api-key': process.env.EXCHANGE_API_KEY,
    'Content-Type': 'application/json',
  },
});

module.exports = axiosInstance;
