const router = require('express').Router();
// const responseHandler = require('../middlewares/responseHandler');
const about = require("../models/about.js");

router.get( "/content", async (req, res) => {
    try {
      const aboutContent = await about.find({}).lean().exec();
      res.send({ data: aboutContent });
    } catch (err) {
      console.log("Error", err);
    }
  });

  router.post("/content", async (req, res) => {
    try {
      const aboutContent = await about.findOne({name:req.body.name});
      if(aboutContent){
        res.send("Data Already exist");
      }else{
        const aboutContent = await about.create(req.body);
        res.status(201).send({ data: aboutContent });
      }
      
    } catch (err) {
      console.log("Error", err);
    }
    
  });

  router.get( "/reviews", async (req, res) => {
    try {
      const aboutReviews = await about.find({}).lean().exec();
      res.send({ data: aboutReviews });
    } catch (err) {
      console.log("Error", err);
    }
  });

  router.post("/reviews", async (req, res) => {
    try {
      const aboutReviews = await about.findOne({name:req.body.name});
      if(aboutReviews){
        res.send("Data Already exist");
      }else{
        const aboutReviews = await about.create(req.body);
        res.status(201).send({ data: aboutReviews });
      }
      
    } catch (err) {
      console.log("Error", err);
    }
    
  });

module.exports = router;