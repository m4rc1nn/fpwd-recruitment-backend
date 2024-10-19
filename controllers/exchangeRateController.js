import * as exchangeRateService from "../services/exchangeRateService.js";

export const getExchangeRate = async (req, res) => {
    try {
        const rate = await exchangeRateService.getExchangeRate();
        res.json({ exchange_rate: rate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
