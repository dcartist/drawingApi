const express = require("express");
const router = express.Router();
const Artwork = require("../db/models/Artwork");

router.get("/", (req, res) => {
    Artwork.find().then(allUsers => {
    res.json(allUsers);
  });
});

// router.get("/:email", (req, res) => {
//   let userEmail = req.params.email;
//   Artwork.findOne({ email: userEmail }).then(user => {
//     res.json(user);
//   });
// });

router.post("/", (req, res) => {
    Artwork.create(req.body).then(created => {
    res.json(created);
  });
});