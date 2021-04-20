const pool = require("./db");

(async () => {
//CANCELLING ORDERS
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const queryText = 
    'SELECT customer_name, product_name FROM "PrelimExam"."GG_purchaseOrder"'
    const res = await client.query(queryText);
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
    console.log(`DATABASE HAS BEEN COMPLETED`)
  }
})().catch(e => console.error(e.stack))