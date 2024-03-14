const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiProfileRouter = require('./api/api.profile.routes')
const apiStudentsRouter = require('./api/api.students.routes');

router.use('/api/auth', apiAuthRouter);
router.use('/api/students', apiStudentsRouter);
router.use('/api/profile', apiProfileRouter)

module.exports = router;
