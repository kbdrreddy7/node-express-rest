import express from "express";
import cors from "cors";

import routes from "./src/routes";

const app = express();
app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const PORT = 8000;
const hostName = "localhost";

app.listen(PORT, hostName, () =>
  console.log(`server started on ${hostName} at port ${PORT}`)
);

app.use("/", routes);
