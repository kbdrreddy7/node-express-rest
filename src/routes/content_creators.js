import express from "express";
import service from "./../services";

const router = express.Router();
const { creatorsService } = service;

// Get tags list
router.get("/", (req, res) => {
  console.log(" in creators params ", req.params, " query ", req.query);
  var data = creatorsService.get();

  if (req.query.filter) {
    let filter = JSON.parse(req.query.filter);
    let ids = filter.id;
    if (ids) data = data.filter(creator => ids.includes(creator.id));
  }
  res.send(data);
});

router.get("/:id", (req, res) => {
  console.log(" ", req.params);
  const { id } = req.params; // req.query !== req.params
  res.send(creatorsService.get(id));
});

router.post("/add", (req, res) => {
  console.log("in tags");
  const { data } = req.body;
  creatorsService.post(data);
  res.send("SUCCESS");
});

export default router;
