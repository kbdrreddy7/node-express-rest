import express from "express";

import fs from "fs";

import contents from "./contents";
import tags from "./tags";
import wisdomcategories from "./wisdom_categories";
import creators from "./content_creators";

const router = express.Router();

router.get("/", (req, res) => {
  let homePage = fs.readFileSync("./src/templets/index.html");
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.write(homePage);
  res.end();
});
router.get("/rest", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "rest api working succesfully"
  });
});

router.use("/*", (req, res, next) => {
  console.log(" method ", req.method);
  console.log(" path ", req.baseUrl);
  console.log(" params ", req.params);
  console.log(" query ", req.query);
  console.log(" body ", req.body);
  console.log(" method ", req.body);
  next();
});
router.use("/contents", contents);
router.use("/tags", tags);
router.use(["/wisdomcategories", "/wisdom_categories"], wisdomcategories);
router.use("/content_creators", creators);

router.all("*", (req, res) => res.send("page not found"));

export default router;
