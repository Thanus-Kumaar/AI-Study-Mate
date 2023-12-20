const express = require('express');
const cors = require('cors');
const mainRouter = require('./mainRoute');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/',mainRouter);

app.listen(8000,(err)=>{
  if(err) console.log(err)
  else console.log("Listening on port 8000");
})
