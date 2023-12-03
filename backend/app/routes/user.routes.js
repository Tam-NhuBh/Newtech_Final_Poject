
module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
    router.get('/', (req, res) => {
      if (req.isAuthenticated()) {
        res.json(req.user);
      } else {
        res.json({ error: 'User not authenticated' });
      }
    });
    router.post("/signin", user.signin);
    router.post("/signup", user.signup);
  
  
    app.use("/api/user", router);
  };