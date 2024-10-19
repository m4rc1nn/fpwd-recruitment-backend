require('dotenv').config()

const express = require('express');
const exchangeRateRoutes = require('./routes/exchangeRate');
// const transactionRoutes = require('./routes/transaction');

const app = express();

app.use(express.json());

app.use('/api', exchangeRateRoutes);
// app.use('/api', transactionRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });