const express = require("express");
const { hashPassword, verifyPassword, verifyToken } = require("./auth");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
router.get("/videos", videoControllers.getVideos);
router.get("/videos/:id", videoControllers.getOneVideo);
router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getOneUser);

router.use(verifyToken);

router.put("/videos/:id", videoControllers.editVideo);
router.post("/videos", videoControllers.addVideo);
router.delete("/videos/:id", videoControllers.destroyVideo);

router.put("/users/:id", hashPassword, userControllers.editUser);
router.post("/users", hashPassword, userControllers.addUser);
router.delete("/users/:id", userControllers.destroyUser);

module.exports = router;
