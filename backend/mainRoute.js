const express = require('express');
const router = express.Router();

const mailRoutes = require('./Common/Mail/Routes/mailRoute.js');

router.use('/mail',mailRoutes);

module.exports = router;