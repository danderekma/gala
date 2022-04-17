const express = require("express");
const passport = require("passport");

require("dotenv").config();

require("./passport")(passport);

const app = express();
const port = process.env.PORT || 5000;

app.use(passport.initialize());
app.use(passport.session);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
