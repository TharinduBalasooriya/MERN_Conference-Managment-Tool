let router = require("express").Router();

//Import controller
let authController =  require('../controller/auth-controller')
let  rpaperController =  require('../controller/researchController/research.controller')


//Import Middlewares
let verify =  require('../middleware/VerifySingUP');
const { route } = require("./workshop-api/workshop-api-router");

router.get("/", (req, res) => {
    res.send("ICAF API Working");
  });


  //User Handler routes
  router.route("/users").post(verify.checkDuplicateUsernameOrEmail,authController.signUP)
  router.route("/auth/login").post(authController.signIn)


  //ResearchPaper Rutes

  //add paper
  router.route("/researchers").post(rpaperController.addReasearcher);

  //get paper

  router.route("/researchers").get(rpaperController.getAllResearches);

  //GetById

  router.route("/researchers/:id").get(rpaperController.getById);

  //delete

  router.route("/researchers/:id").delete(rpaperController.deletePaper);

  //update


  router.route("/researchers/:id").put(rpaperController.updatePaper);


  //uploadPaper

  router.route("/papers/uploads").post(rpaperController.uploadFile);


  //download templates

  router.route("/templates/paper").get(rpaperController.downloadPaperTemplate)
  router.route("/templates/workshop").get(rpaperController.downloadWorkshopTemplate)
  



module.exports = router;