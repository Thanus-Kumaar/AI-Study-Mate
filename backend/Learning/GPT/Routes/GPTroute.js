const express = require('express');
const GPTcontroller = require('../Controllers/GPTcontroller.js');

const router = express.Router();

router.get('/LearnTopic',(req,res)=>{
  GPTcontroller.LearnTopic(req,res);
});

module.exports = router;