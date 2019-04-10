import express from "express";
import service from "./../services";

const router = express.Router();
const { tagsService } = service;

// Get tags list
router.get("/", (req, res) => {
  const data = tagsService.get();

  res.send(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params; // req.query !== req.params
  res.send(tagsService.get(id));
});

router.post("/add", (req, res) => {
  let { data } = req.body;
  tagsService.post(data);
  res.send("SUCCESS");
});

router.post("/", (req, res) => {
  let id = tagsService.post(req.body);
  res.send({ id });
});

router.put("/:id", (req, res) => {
  const { id } = req.params; // req.query !== req.params
  let tag = tagsService.put(id, req.body);
  res.send({ id: tag.id });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(" in delete id ");
  tagsService.deleteTag(id);
  res.send("SUCCESS");
});

router.delete("/", (req, res) => {
  const { ids } = req.query;
  if (typeof ids === "string") {
    tagsService.deleteTag(ids);
  } else {
    tagsService.deleteTags(ids);
  }
  res.send("SUCCESS");
});

export default router;
