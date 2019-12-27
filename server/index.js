const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("client/dist/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
