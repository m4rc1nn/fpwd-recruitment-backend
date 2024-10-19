let transactions = []; //simply saving transactions in memory, no database yet

class Transaction {
    constructor({ amountEUR, amountPLN, rate, timestamp }) {
        this.amountEUR = amountEUR;
        this.amountPLN = amountPLN;
        this.rate = rate;
        this.timestamp = timestamp;
    }

    async save() {
        await new Promise((resolve) => setTimeout(resolve, 500)); //simulate saving to database
        transactions.push(this);
    }

    static getAll() {
        return transactions;
    }
}

export default Transaction;
