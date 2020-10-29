function checkFieldsPostImages(req, res, next) {
  const { name, imageUrl } = req.body;

  if (name && imageUrl) {
    next();
  } else {
    res.status(400).json({ message: "Images Form field not can't be empty" });
  }
}

function checkFieldsPostGameboardImages(req, res, next) {
  const { name, imageUrl } = req.body;

  if (name && imageUrl) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "Gamebord Image Assets Form field not can't be empty" });
  }
}

module.exports = {
  checkFieldsPostImages,
  checkFieldsPostGameboardImages,
};
