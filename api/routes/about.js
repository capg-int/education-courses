const router = require('express').Router();
const paginate = require('express-paginate');
const aboutModel = require("../models/about");
 
router.use(paginate.middleware(5, 10));

router.get("/content", async (req, res, next) => {
  try {
    const [ results, itemCount ] = await Promise.all([
      aboutModel.find({}).populate(this.name).limit(req.query.limit).skip(req.skip).sort({name: 'asc'}).lean().exec(),
      aboutModel.count({})
      
    ]);
    const pageCount = Math.ceil(itemCount / req.query.limit);
    if (req.accepts('json')) {
      res.json({
        object: 'list',
        has_more: paginate.hasNextPages(req)(pageCount),
        pageCount,
        itemCount,
        pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),
        data: results
      });
    } 
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
  try {
    const [ results, itemCount ] = await Promise.all([
      aboutModel.find({}).limit(req.query.limit).skip(req.skip).sort({name: 'asc'}).lean().exec(),
      aboutModel.count({})
    ]);
    const pageCount = Math.ceil(itemCount / req.query.limit);
    if (req.accepts('json')) {
      res.json({
        object: 'list',
        has_more: paginate.hasNextPages(req)(pageCount),
        data: results
      });
    } 
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