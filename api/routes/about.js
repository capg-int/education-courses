const router = require('express').Router();

const aboutModel = require("../models/about");

router.get("/content", async (req, res) => {
  try {
    const aboutContent = await aboutModel.find({}).lean().exec();
    res.send({ data: aboutContent });
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/content", async (req, res) => {
  try {
    const aboutContent = await aboutModel.findOne({ name: req.body.name });
    if (aboutContent) {
      res.send("Data Already exist");
    } else {
      const aboutContent = await aboutModel.create(req.body);
      res.status(201).send({ data: aboutContent });
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.get("/reviews", async (req, res) => {
  try {
    const aboutReviews = await aboutModel.find({}).lean().exec();
    res.send({ data: aboutReviews });
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/reviews", async (req, res) => {
  try {
    const aboutReviews = await aboutModel.findOne({ name: req.body.name });
    if (aboutReviews) {
      res.send("Data Already exist");
    } else {
      const aboutReviews = await aboutModel.create(req.body);
      res.status(201).send({ data: aboutReviews });
    }
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;
