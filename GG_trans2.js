const pool = require("./db");

(async () => {
const client = await pool.connect()
try {
  await client.query('BEGIN')
  const queryText = 
'INSERT INTO "PrelimExam"."GG_purchaseOrder"(customer_id, supplier_id, customer_name, product_name) VALUES($1, $2, $3, $4) RETURNING "purchOrd_id";'

  const dataValues = [2, 3, 'JimsBand', 'Gym Bag'];
  const res = await client.query(queryText, dataValues);
  await console.log("newly created id is ", res.rows[0].purchOrd_id);

  await client.query('BEGIN')
  const queryText1 = 
'INSERT INTO "PrelimExam"."GG_purchaseOrder"(customer_id, supplier_id, customer_name, product_name) VALUES($1, $2, $3, $4) RETURNING "purchOrd_id";'
  const dataValues1 = [2, 2, 'JimsBand', 'Shirts'];
  const res1 = await client.query(queryText1, dataValues1);
  await console.log("newly created id is ", res1.rows[0].purchOrd_id);

  await client.query('BEGIN')
  const queryText2 = 
'INSERT INTO "PrelimExam"."GG_purchaseOrder"(customer_id, supplier_id, customer_name, product_name) VALUES($1, $2, $3, $4) RETURNING "purchOrd_id";'
  const dataValues2 = [2, 4, 'JimsBand', 'Goggles'];
  const res2 = await client.query(queryText2, dataValues2);
  await console.log("newly created id is ", res2.rows[0].purchOrd_id);

  await client.query('COMMIT')
} catch (e) {
  await client.query('ROLLBACK')
  throw e
} finally {
  client.release()
  console.log(`DATABASE HAS BEEN COMPLETED`)
}
})().catch(e => console.error(e.stack))