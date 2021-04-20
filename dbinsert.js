const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."GG_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
const data = ['Adriesh', 'GG_Asgard'];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();
