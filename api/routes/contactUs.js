

const express = require("express");
const router = express.Router();

const contactUS = require("../models/contactUS.js");

router.get( "/information", async (req, res) => {
  try {
    const contactUsInfo = await contactUS.find({}).lean().exec();
    res.send({ data: contactUsInfo });
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/info", async (req, res) => {
  try {
    const contactUsInfo = await contactUS.findOne({email:req.body.email});
    if(contactUsInfo){
      res.send("Data Already exist");
    }else{
      const contactUsData = await contactUS.create(req.body);
      res.status(201).send({ data: contactUsData });
    }
    
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/submit", async (req, res) => {
  try {
    const contactUsData = await contactUS.create(req.body);
    res.status(201).send({ data: contactUsData });
    
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;
