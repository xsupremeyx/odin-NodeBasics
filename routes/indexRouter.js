// routes/indexRouter.js
const { Router } = require("express");

const indexRouter = Router();

const links = [
    { name: "Home", path: "/" },
    { name: "Authors", path: "/authors" },
    { name: "Books", path: "/books" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
]

indexRouter.get("/", (req, res, next) => {
  try {
    res.render("index", { links: links });
  }
  catch (error) {
    next(error);
  }
});

indexRouter.get("/about", (req, res, next) => {
  try {
  res.render("about", { links: links });
  }
  catch (error) {
    next(error);
  }
});

indexRouter.get("/contact", (req, res, next) => {
    try {
  res.render("contact", { links: links });
    }
    catch (error) {
        next(error);
    }
});

indexRouter.post("/contact", (req,res, next) => {
  try{
    res.send('Contact page POST');
  }
  catch(error){
    next(error);
  }
})

module.exports = { indexRouter, links};