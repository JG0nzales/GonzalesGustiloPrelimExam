const pool = require("./db");

(async () => {
//CANCELLING ORDERS
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const queryText = 
    'DELETE FROM "PrelimExam"."GG_purchaseOrder" WHERE "purchOrd_id" = $1 RETURNING *'

    const dataValues = [3];
    const res = await client.query(queryText, dataValues);
    await console.log("newly created id is ", res.rows[0].purchOrd_id);

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
    console.log(`DATABASE HAS BEEN COMPLETED`)
  }
})().catch(e => console.error(e.stack))