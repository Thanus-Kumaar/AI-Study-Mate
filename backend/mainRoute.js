const express = require('express');
const router = express.Router();

const mailRoutes = require('./Common/Mail/Routes/mailRoute.js');
const GPTroutes = require('./Learning/GPT/Routes/GPTroute.js');

router.use('/mail',mailRoutes);
router.use('/GPT',GPTroutes);

module.exports = router;