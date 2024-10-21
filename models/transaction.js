import knex from 'knex';
import knexConfig from '../config/knexfile.js';

const db = knex(knexConfig);

class Transaction {
  constructor({ amountEUR, amountPLN, rate, timestamp }) {
    this.amountEUR = amountEUR;
    this.amountPLN = amountPLN;
    this.rate = rate;
    this.timestamp = timestamp;
  }

  async save() {
    await db('transactions').insert({
      amountEUR: this.amountEUR,
      amountPLN: this.amountPLN,
      rate: this.rate,
      timestamp: this.timestamp,
    });
  }

  static async getAll(limit = 10) {
    const transactions = await db('transactions').select('*').orderBy('id', 'desc').limit(limit); //fake limit to last 10 transactions
    return transactions;
  }
}

export default Transaction;