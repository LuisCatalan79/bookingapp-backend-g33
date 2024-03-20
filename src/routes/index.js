const express = require('express');
const { route } = require('./user.routers');
const userRouter = require('./user.routers');
const cityRouter = require('./city.routers');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter);
router.use(cityRouter);

module.exports = router;