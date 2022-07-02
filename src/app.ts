import express from "express";

const app = express();

app.use(express.json()); // In order to actually get the body from a request

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.post("/api/data", (req, res) => {
  console.log(req.body);

  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});
