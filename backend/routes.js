const express = require('express');
const MainController = require('./controllers/MainController');
const router = express.Router();

router.get("/cep/:number", MainController.getAddressByCep);

module.exports = router;