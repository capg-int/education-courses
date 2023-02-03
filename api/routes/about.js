const router = require("express").Router();
const aboutModel = require("../models/about");


router.get("/content", async (req, res, next) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    const about = await aboutModel
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ name: "asc" })
      .exec();

    const count = await aboutModel.count();

    res.json({
      about,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
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

router.get("/reviews", async (req, res, next) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    const about = await aboutModel
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ name: "asc" })
      .exec();

    const count = await aboutModel.count();

    res.json({
      about,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
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