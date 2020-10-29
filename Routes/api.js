// Routes Api Version 1
//

const express = require("express");
const router = express.Router();
const middlewares = require("../Helpers/middlewares");
const controllerApi = require("../Controllers/controller-api");

// endpoint images
router.post(
  "/images",
  middlewares.checkFieldsPostImages,
  controllerApi.createNewImages
);
router.get("/images", controllerApi.getAllImage);
router.get("/images/:id", controllerApi.getOneImage);
router.put("/images/:id", controllerApi.updateImageAsset);
router.delete("/images/:id", controllerApi.deleteOneImageAsset);
router.delete("/images/", controllerApi.deleteAllImage);

// endpoint gameboard image asset
router.post(
  "/gameboard",
  middlewares.checkFieldsPostGameboardImages,
  controllerApi.createNewGameboardImage
);
router.get("/gameboard", controllerApi.getAllGameboardImage);
router.get("/gameboard/:id", controllerApi.getOneGameboardImage);
router.put("/gameboard/:id", controllerApi.updateGameboardImage);
router.delete("/gameboard/:id", controllerApi.deleteOneGameboardImage);
router.delete("/gameboard/", controllerApi.deleteAllGameboardImage);

module.exports = router;
