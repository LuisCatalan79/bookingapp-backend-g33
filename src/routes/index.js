const express = require('express');
const { route } = require('./user.routers');
const userRouter = require('./user.routers');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);

module.exports = router;