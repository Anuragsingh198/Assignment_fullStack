const express = require('express');
const cartRouter = express.Router();

const { UploadCardData, getCardData, getTitledData } = require('../controllers/cartControllers');

cartRouter.post('/Post/cards', UploadCardData);
cartRouter.get('/Get/Cards', getCardData);
cartRouter.get('/Get/Cards/:title', getTitledData);

module.exports = cartRouter;
