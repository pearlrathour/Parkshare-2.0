if (process.env.Port !== "production") {
  require("dotenv").config();
}
// if in local req module

const express = require("express");
const path = require("path"); // for working with file and directory paths
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash"); // authentication
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const userRoutes = require("./routes/users");
const campgroundRoutes = require("./routes/campgrounds");
const reviewRoutes = require("./routes/reviews");

const port = process.env.PORT || 3000;

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const sessionConfig = {
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  console.log(req.session);
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", userRoutes);
app.use("/toilink", campgroundRoutes);
app.use("/toilink/:id/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.render("main");
});
app.get("/home", (req, res) => {
  res.render("home");
});

app.all("*", (req, res, next) => {
  next(res.render("errorAll"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).render("error", { err });
});

mongoose
  .connect(
    `mongodb+srv://App_Project:ue76RvCZ23XoXIOB@appcluster.jbd00.mongodb.net/parkShare?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Database Connected!!");
    app.listen(port, () => {
      console.log("lets goo");
    });
  })
  .catch((err) => {
    console.log(err);
  });

  
