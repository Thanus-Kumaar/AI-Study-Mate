const express = require('express');
const studyController = require('../Controllers/studyController.js');

const router = express.Router();

router.post('/saveTopic',(req,res)=>{
  studyController.SaveTopic(req,res);
});

router.post('/AddLinks',(req,res)=>{
  studyController.addLinks(req,res);
});

router.get('/getTopics',(req,res)=>{
  studyController.getTopics(req,res);
});

module.exports = router;