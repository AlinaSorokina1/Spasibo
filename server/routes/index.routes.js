const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiStudentsRouter = require('./api/api.students.routes');

router.use('/api/auth', apiAuthRouter);
router.use('/api/students', apiStudentsRouter);

module.exports = router;
