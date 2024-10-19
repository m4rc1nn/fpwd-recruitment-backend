require('dotenv').config()

const axiosInstance = require('../config/axiosInstance');

exports.getExchangeRate = async () => {
    try {
      const response = await axiosInstance.get('/');
      return response.data.exchange_rate;
    } catch (error) {
      throw new Error('Failed to fetch exchange rate');
    }
  };