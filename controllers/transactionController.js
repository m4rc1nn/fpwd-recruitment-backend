import * as transactionService from "../services/transactionService.js";

export const createTransaction = async (req, res) => {
    try {
        const { amountEUR } = req.body;
        if (typeof amountEUR !== "number" || isNaN(amountEUR)) {
            return res.status(400).json({ error: "Invalid amountEUR" });
        }
        const transaction = await transactionService.createTransaction(
            amountEUR
        );
        res.json({transaction: transaction});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        res.json({transactions: transactions});
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
};
