const axios = require("axios");
const router = require("express").Router();
const Flickr = require('flickr-sdk');


router.get("/pictures", (req, res) => {
  axios
    .get("http://www.flickr.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;