import knex from 'knex';
import knexConfig from '../config/knexfile.js';

const db = knex(knexConfig);

export default async function setupDatabase() {
  const exists = await db.schema.hasTable('transactions');
  if (!exists) {
    await db.schema.createTable('transactions', (table) => {
      table.increments('id');
      table.float('amountEUR');
      table.float('amountPLN');
      table.float('rate');
      table.timestamp('timestamp');
    });
    console.log('Table transactions created.');
  }
}