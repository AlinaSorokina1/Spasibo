const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiStudentRouter = require('./api/api.student.routes')

router.use('/api/auth', apiAuthRouter);
router.use('/api/students',apiStudentRouter)

module.exports = router;
