import * as exchangeRateService from "./exchangeRateService.js";
import Transaction from "../models/transaction.js";

const createTransaction = async (amountEUR) => {
    const rate = await exchangeRateService.getExchangeRate();
    const amountPLN = amountEUR * rate;

    const transactionData = {
        amountEUR,
        amountPLN,
        rate,
        timestamp: new Date(),
    };

    const transaction = new Transaction(transactionData);
    
    try {
        await transaction.save();
    } catch (error) {
        throw new Error("Failed to save transaction");
    }

    return transaction;
};

const getAllTransactions = async () => {
    return Transaction.getAll();
};

export { createTransaction, getAllTransactions };
