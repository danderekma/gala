const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");

dotenv.config();

require("./passport")(passport);

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
