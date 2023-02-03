const express = require("express");
const router = express.Router();

const Author = require("../models/author.model");
const Course = require("../models/course.model");

// Get all authors
router.get("/", async (req, res) => {
  const authors = await Author.find().lean().exec();
  return res.status(200).send({ data: authors });
});

// Get a single author
router.get("/:id", async (req, res) => {
  const authors = await Author.findById(req.params.id).lean().exec();
  return res.status(200).send({ data: authors });
});

// Get all the courses of a single author
router.get("/:id/courses", async (req, res) => {
  const author = await Author.findById(req.params.id).lean().exec();
  const courses = await Course.find({ author: req.params.id }).lean().exec();
  return res.status(200).send({ author, courses });
});

// Create an author
router.post("/", async (req, res) => {
  try {
    const author = await Author.findOne({ email: req.body.email })
      .lean()
      .exec();
    if (author) {
      res.status(403).send("Author already exists");
    } else {
      const author = await Author.create(req.body);
      res.status(201).send({ data: author });
    }
  } catch (err) {
    console.log("Error", err);
  }
});

// Update an author
router.patch("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).send({ data: author });
  } catch (err) {
    console.log("Error", err);
  }
});

// Delete an author
router.delete("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.status(200).send({ data: author });
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;
