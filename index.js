const express = require("express");
const app = express();
var port = 3000 || process.env.PORT;
var path = require("path");
var URLKeys = new Map();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

const { createURL, getShortURL } = require("./helpers");

app.post("/generate-url", (req, res) => {
  const { longURL, custom } = req.body;
  console.log(longURL, custom);
  if (!longURL || !custom) return res.status(400).send("Missing params");
  const short = createURL(longURL, custom);
  if (short) return res.status(200).json(short);
  return res.status(500).send("Something went wrong");
});

app.get("/:ID", (req, res) => {
  const { ID } = req.params;
  if (!ID) return res.status(400).send("Missing ID");
  const shortURL = "http://localhost:" + port + "/" + ID;
  const longURL = getShortURL(shortURL);
  if (longURL) res.redirect(longURL);
  else res.status(404).send("Not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
