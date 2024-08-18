const tryCatch = require('./utills/tyrCatch');
const Card = require('../models/card');

const UploadCardData = tryCatch(async (req, res) => {
    const { title, description } = req.body;
    const card = new Card({
      title,
      description,
    });
  
    await card.save();
    res.status(201).json({ success: true, result: card });
  });


  const getCardData = tryCatch(async (req, res) => {
    const cards = await Card.find();
    res.status(200).json({ success: true, data: cards });
  });
  

const getTitledData = tryCatch(async (req, res) => {
    const title = req.params.title;
    const titledData = await Card.find({ title });
    res.status(200).json({ success: true, result: titledData });
  });
  

module.exports = {
    UploadCardData, 
    getCardData,
    getTitledData,
  };
  