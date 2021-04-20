const pool = require("./db");

(async () => {

  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const queryText = 'INSERT INTO "PrelimExam"."GG_product"(supplier_name, product_name) VALUES($1, $2) RETURNING product_id;'
    const dataValues = ['Nikke', 'Shoes'];
    const res = await client.query(queryText, dataValues);
    await console.log("newly created id is ", res.rows[0].product_id);

    await client.query('BEGIN')
    const queryText1 = 'INSERT INTO "PrelimExam"."GG_product"(supplier_name, product_name) VALUES($1, $2) RETURNING product_id;'
    const dataValues1 = ['Adeedaz', 'Shirts'];
    const res1 = await client.query(queryText1, dataValues1);
    await console.log("newly created id is ", res1.rows[0].product_id);

    await client.query('BEGIN')
    const queryText2 = 'INSERT INTO "PrelimExam"."GG_product"(supplier_name, product_name) VALUES($1, $2) RETURNING product_id;'
    const dataValues2 = ['Upper Armour', 'Gym Bag'];
    const res2 = await client.query(queryText2, dataValues2);
    await console.log("newly created id is ", res2.rows[0].product_id);

    await client.query('BEGIN')
    const queryText3 = 'INSERT INTO "PrelimExam"."GG_product"(supplier_name, product_name) VALUES($1, $2) RETURNING product_id;'
    const dataValues3 = ['Slowdo', 'Goggles'];
    const res3 = await client.query(queryText3, dataValues3);
    await console.log("newly created id is ", res3.rows[0].product_id);

    await client.query('BEGIN')
    const queryText4 = 'INSERT INTO "PrelimExam"."GG_product"(supplier_name, product_name) VALUES($1, $2) RETURNING product_id;'
    const dataValues4 = ['M & H', 'Boxers'];
    const res4 = await client.query(queryText4, dataValues4);
    await console.log("newly created id is ", res4.rows[0].product_id);

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
    console.log(`DATABASE HAS BEEN COMPLETED`)
  }
})().catch(e => console.error(e.stack))
