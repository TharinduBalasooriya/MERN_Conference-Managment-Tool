let router = require("express").Router();

//Import controller
let authController =  require('../controller/auth-controller')


//Import Middlewares
let verify =  require('../middleware/VerifySingUP')

router.get("/", (req, res) => {
    res.send("ICAF API Working");
  });


  //User Handler routes
  router.route("/users").post(verify.checkDuplicateUsernameOrEmail,authController.signUP)
  router.route("/auth/login").post(authController.signIn)



module.exports = router;