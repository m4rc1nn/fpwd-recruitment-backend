const exchangeRateService = require('../services/exchangeRateService');

exports.getExchangeRate = async (req, res) => {
  try {
    const rate = await exchangeRateService.getExchangeRate();
    res.json({ exchange_rate: rate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
