import express from "express";
import service from "./../services";

const router = express.Router();
const { contentsService } = service;

// Get tags list
router.get("/", (req, res) => {
  res.send(contentsService.get());
});

router.get("/:id", (req, res) => {
  const { id } = req.params; // req.query !== req.params
  res.send(contentsService.get(id));
});

router.post("/add", (req, res) => {
  let id = contentsService.post(req.body);
  res.send({ id });
});
router.post("/", (req, res) => {
  let id = contentsService.post(req.body);
  res.send({ id });
});
router.put("/:id", (req, res) => {
  const { id } = req.params; // req.query !== req.params
  let tag = contentsService.put(id, req.body);
  res.send({ id: tag.id });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  contentsService.deleteContent(id);
  res.send("SUCCESS");
});

router.delete("/", (req, res) => {
  const { ids } = req.query;
  if (typeof ids === "string") {
    contentsService.deleteContents(ids);
  } else {
    contentsService.deleteContents(ids);
  }
  res.send("SUCCESS");
});
export default router;
