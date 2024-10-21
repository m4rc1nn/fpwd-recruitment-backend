import * as transactionService from "../services/transactionService.js";
import { broadcast } from "../app.js";
export const createTransaction = async (req, res) => {
    try {
        const { amountEUR } = req.body;
        if (typeof amountEUR !== "number" || isNaN(amountEUR)) {
            return res.status(400).json({ error: "Invalid amountEUR" });
        }

        if (amountEUR < 0 || amountEUR > 1000000) {
            return res.status(400).json({ error: "Amount must be between 0 and 1000000" });
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); //simulate delay

        const transaction = await transactionService.createTransaction(amountEUR);

        broadcast({ type: "new_transaction", data: transaction });
        res.json({ transaction: transaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        res.json({
            transactions: transactions.sort(function (a, b) {
                return new Date(b.timestamp) - new Date(a.timestamp);
            }),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
