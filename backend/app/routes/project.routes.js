module.exports = app => {
    const projects = require("../controllers/project.controller.js");
  
    var router = require("express").Router();

    // Retrieve all Projects
    router.get("/", projects.findAll);
    router.get("/published", projects.findAllPublished);
    router.get("/downloadfile", projects.downloadFilePdf);
    app.use("/api/projects", router);
  };