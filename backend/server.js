const express = require('express');
const cors = require('cors');

const app = express.app();

app.use(cors());
app.use(express.json());

app.listen(8000,(err)=>{
  if(err) console.log(err);
  else console.log("Listening on port 8000");
});