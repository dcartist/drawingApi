const express = require("express");
const router = express.Router();
const Artwork = require("../db/models/Artwork");

router.get("/", (req, res) => {
    Artwork.find().then(allUsers => {
    res.json(allUsers);
  });
});

router.post("/", (req, res) => {
    Artwork.create(req.body).then(created => {
    res.json(created);
  });
});

router.get("/id/:id", (req, res) => {
  Artwork.findOne({ _id: req.params.id }).then(user => {
    res.json(user);
  });
});


router.put("/update/:id", (req, res) => {
  Artwork.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(update => res.json(update))
})

router.delete("/delete/:id", (req, res) => {
  Artwork.findOneAndDelete({ _id: req.params.id }).then(deleted => res.json(deleted))
})
router.get("/delete/all/", (req, res) => {
  Artwork.deleteMany().then(deleted => res.json(deleted))
})

module.exports = router