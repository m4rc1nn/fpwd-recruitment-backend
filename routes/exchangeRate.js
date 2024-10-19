const express = require('express');
const router = express.Router();
const exchangeRateController = require('../controllers/exchangeRateController');

const cache = require('apicache');

router.get('/exchange-rate', cache('1 minute'), exchangeRateController.getExchangeRate);

module.exports = router;