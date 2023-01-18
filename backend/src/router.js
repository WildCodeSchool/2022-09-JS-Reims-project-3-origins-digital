const express = require("express");
const { hashPassword, verifyPassword, verifyToken } = require("./auth");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getOneUser);
router.get("/videos", videoControllers.getVideos);
router.get("/videos/:id", videoControllers.getOneVideo);
router.post("/users", hashPassword, userControllers.addUser);
router.get("/category", categoryControllers.getCategory);
router.get("/category/:id", categoryControllers.getOneCategory);
router.use(verifyToken);

router.put("admin/videos/modify/:id", videoControllers.editVideo);
router.post("admin/videos/add", videoControllers.addVideo);
router.delete("admin/videos/modify/:id", videoControllers.destroyVideo);
router.put("admin/category/:id", categoryControllers.editCategory);
router.post("admin/category", categoryControllers.addCategory);
router.delete("admin/category/:id", categoryControllers.destroyCategory);

router.put("admin/users/:id", hashPassword, userControllers.editUser);

router.delete("admin/users/:id", userControllers.destroyUser);

module.exports = router;
