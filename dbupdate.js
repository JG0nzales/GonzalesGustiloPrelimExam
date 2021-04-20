const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."GG_customer" SET customer_name = $1 WHERE customer_id = 2 RETURNING *';
const data = ['JimsBand'];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();