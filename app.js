import dotenv from 'dotenv';
import express from 'express';
import exchangeRateRoutes from './routes/exchangeRateRouter.js';
import transactionRoutes from './routes/transactionRouter.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", exchangeRateRoutes);
app.use('/api', transactionRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
