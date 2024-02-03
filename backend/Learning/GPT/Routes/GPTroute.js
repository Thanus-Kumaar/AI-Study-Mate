const express = require('express');
const GPTcontroller = require('../Controllers/GPTcontroller.js');

const router = express.Router();

router.get('/LearnTopic',(req,res)=>{
  GPTcontroller.LearnTopic(req,res);
});

router.get('/Chat',(req,res)=>{
  GPTcontroller.ChatBot(req,res);
});

router.get('/ref_book',(req,res)=>{
  GPTcontroller.Ref_Book(req,res);
});

router.get('/quiz',(req,res)=>{
  GPTcontroller.GetQuizDetails(req,res);
})

module.exports = router;