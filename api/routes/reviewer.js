const express = require("express");
const Reviewer = require("../models/reviewer");
const router = express.Router();

router.get("/", async (req, res) => {
    const reviewers = await Reviewer.find().lean().exec();
    return res.status(200).send({ data: reviewers });
  });

  router.post("/", async (req, res) => {
    try {
      const reviewer = await Reviewer.findOne({ name: req.body.name })
        .lean()
        .exec();
      if (reviewer) {
        res.status(403).send("Reviewer already exists");
      } else {
        const reviewer = await Reviewer.create(req.body);
        res.status(201).send({ data: reviewer });
      }
    } catch (err) {
      console.log("Error", err);
    }
  });

  module.exports = router;
