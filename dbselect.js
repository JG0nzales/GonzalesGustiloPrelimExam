const pool = require("./db");


pool.query('SELECT customer_name, product_name FROM "PrelimExam"."GG_purchaseOrder"', (err, result) => {
 try {
   console.log(result.rows);
 } catch (err) {
   console.log(err.message);
 }
});

pool.end();
