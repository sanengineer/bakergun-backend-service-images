const imagesPages = require("../Models/user/images");
const gameboardImages = require("../Models/user/gameboard");

module.exports = {
  // Images All Pages
  //
  // create and save a images asset
  createNewImages: (req, res) => {
    // create new image assets
    const imagesReqBody = {
      name: req.body.username,
      imageUrl: req.body.imageUrl,
    };

    // console.log(imagesReqBody);

    imagesPages
      .create(imagesReqBody)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "found error while creating user",
        });
      });
  },

  // get one image by id
  getOneImage: (req, res) => {
    const { id } = req.params;

    imagesPages
      .findOne({ _id: id })
      .then((data) => {
        if (data == data) {
          res.status(200).send(data);
        } else {
          res.status(200).send({
            message: `id = ${id} maybe was deleted`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "no user with" + id,
        });
      });
  },

  // get all image
  getAllImage: (req, res) => {
    imagesPages
      .find() // find is function bawaan Mongoose
      .then((data) => {
        res.send(data);
        console.log(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "something error to get all user",
        });
      });
  },

  // update images by id
  updateImageAsset: (req, res) => {
    const { id } = req.params;

    const updateOneImageReqBody = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    };

    imagesPages.findByIdAndUpdate(
      id,
      updateOneImageReqBody,
      (error, result) => {
        if (error) {
          res.send({
            message:
              error ||
              `can't update user game biodata with id=${id} maybe req.body is mty`,
          });
        } else {
          res.send({
            message: `user game biodata with id=${id} was upadated successfully`,
          });
        }
      }
    );
  },

  // delete images by id
  deleteOneImageAsset: (req, res) => {
    const { id } = req.params;

    const removeOneImageReqBody = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    };

    imagesPages.findByIdAndRemove(
      id,
      removeOneImageReqBody,
      (error, result) => {
        if (error) {
          res.send({
            message:
              error ||
              `can't update user game biodata with id=${id} maybe req.body is mty`,
          });
        } else {
          res.send({
            message: `user game biodata with id=${id} was deleted successfully`,
          });
        }
      }
    );
  },

  // delete all images assets
  deleteAllImage: (req, res) => {
    imagesPages
      .deleteMany()
      .then(
        imagesPages.count({}, (err, result) => {
          if (err) {
            res.send({
              message: err || "something get error",
            });
          } else {
            res.send({
              message: `${result} user game data was deleted successfully`,
            });
          }
        })
      )
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Delete all failed",
        });
      });
  },

  // Gameboard Images Assets
  //
  // create and save a new images assets
  createNewGameboardImage: (req, res) => {
    const gameboardNewImageReqBody = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    };

    console.log(gameboardNewImageReqBody);

    gameboardImages
      .create(gameboardNewImageReqBody)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating gameboard images assets",
        });
      });
  },

  // get one images on gameboard page by id
  getOneGameboardImage: (req, res) => {
    const { id } = req.params;

    gameboardImages
      .findOne({ _id: id })
      .then((data) => {
        if (data == data) {
          res.status(200).send(data);
        } else {
          res.status(200).send({
            message: `id = ${id} maybe was deleted`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "no assets image on gameboard page with" + id,
        });
      });
  },

  // get all images assets on gameoard
  getAllGameboardImage: (req, res) => {
    gameboardImages
      .find() // find is function bawaan Mongoose
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "something error to get all image asset on gameboard page",
        });
      });
  },

  // update image asset on gameboard page by id
  updateGameboardImage: (req, res) => {
    const { id } = req.params;

    const updateOneGamebordImageReqBody = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    };

    gameboardImages.findByIdAndUpdate(
      id,
      updateOneGamebordImageReqBody,
      (error, result) => {
        if (error) {
          res.send({
            message:
              error ||
              `can't update user game biodata with id=${updateOneGamebordImageReqBody._id} with name=${updateOneGamebordImageReqBody.name} maybe req.body is mty`,
          });
        } else {
          res.send({
            message: `user game biodata with id=${id} was upadated successfully`,
          });
        }
      }
    );
  },

  // delete user game history by id
  deleteOneGameboardImage: (req, res) => {
    const { id } = req.params;

    const removeOneGameboardImageReqBody = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    };

    gameboardImages.findByIdAndRemove(
      id,
      removeOneGameboardImageReqBody,
      (error, result) => {
        if (error) {
          res.send({
            message:
              error ||
              `can't update user game biodata with id=${removeOneGameboardImageReqBody._id} name=${removeOneGameboardImageReqBody.name} maybe req.body is mty`,
          });
        } else {
          res.send({
            message: `user game biodata with id=${id} was deleted successfully`,
          });
        }
      }
    );
  },

  // delete all user game history
  deleteAllGameboardImage: (req, res) => {
    gameboardImages
      .deleteMany()
      .then(
        gameboardImages.count({}, (err, result) => {
          if (err) {
            res.send({
              message: err || "something get error",
            });
          } else {
            res.send({
              message: `${result} all asset image on gameboard page was deleted successfully`,
            });
          }
        })
      )
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Delete all failed",
        });
      });
  },
};
