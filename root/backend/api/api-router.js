let router = require("express").Router();

router.get("/", (req, res) => {
    res.send("ICAF API Working");
  });
module.exports = router;