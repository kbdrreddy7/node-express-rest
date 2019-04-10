import express from "express";
import service from "./../services";

const router = express.Router();
const { wisdomsService } = service;

// Get tags list
router.get("/", (req, res) => {
  const data = wisdomsService.get();
  res.send(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params; // req.query !== req.params
  res.send(wisdomsService.get(id));
});

router.post("/add", (req, res) => {
  let id = wisdomsService.post(req.body);
  res.send({ id });
});

router.post("/", (req, res) => {
  let id = wisdomsService.post(req.body);
  res.send({ id });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  wisdomsService.put(id, req.body);
  res.send({ id });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  wisdomsService.deleteWisdom(id);
  res.send("SUCCESS");
});

router.delete("/", (req, res) => {
  const { ids } = req.query;
  if (typeof ids === "string") {
    wisdomsService.deleteWisdoms(ids);
  } else {
    wisdomsService.deleteWisdoms(ids);
  }
  res.send("SUCCESS");
});

export default router;
