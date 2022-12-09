const Tutorial = require("../models/tutorial.model");

// Create and Save a new Tutorial
exports.createTutorial = async (req, res) => {
  try {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // create tutorial
    const tutorial = await Tutorial.create(req.body);
    res.status(201).json({
      success: true,
      data: tutorial,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Retrieve all Tutorials from the database.
exports.findAllTutorials = async (req, res) => {
  try {
    const tutorial = await Tutorial.find();
    res.status(200).json(tutorial);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Find a single Tutorial with an id
exports.findOneTutorial = async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    res.status(200).json(tutorial);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a Tutorial by the id in the request
exports.updateTutorial = async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!tutorial) {
      return res.status(400).json({
        message: "no tutorial found found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "tutorial updated",
      data: tutorial,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Delete a Tutorial with the specified id in the request
exports.deleteTutorial = async (req, res) => {
  try {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Tutorial has been deleted..." });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Delete all Tutorials from the database.
exports.deleteAllTutorials =async(req, res) => {
  try {
    await Tutorial.deleteMany({}).then((data) =>{
      res.status(200).json({  message: `${data.deletedCount} Tutorials were deleted successfully!`, });
    });   
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Find all published Tutorials
exports.findAllPublishedTutorials = async (req, res) => {
  try {
    const publishedTutorials = await Tutorial.find({ published: true });
    if (publishedTutorials == 0) {
      return res.status(404).json({
        message: "no published tutorials",
      });
    } else {
      res.status(200).json({
        message: "published tutorials",
        data: publishedTutorials,
      });
    }
  } catch (err) {
    res.status(500).json(err.name);
  }
};
