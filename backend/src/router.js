const express = require("express");
const { hashPassword } = require("./auth");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/videos", videoControllers.getVideos);
router.get("/videos/:id", videoControllers.getOneVideo);
router.put("/videos/:id", videoControllers.editVideo);
router.post("/videos", videoControllers.addVideo);
router.delete("/videos/:id", videoControllers.destroyVideo);

router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", hashPassword, userControllers.editUser);
router.post("/users", hashPassword, userControllers.addUser);
router.delete("/users/:id", userControllers.destroyUser);

module.exports = router;
