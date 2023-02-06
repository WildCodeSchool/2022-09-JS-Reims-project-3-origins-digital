const express = require("express");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
} = require("./auth");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/videos", videoControllers.getVideos);
router.get("/videos/:id", videoControllers.getOneVideo);

router.get("/category", categoryControllers.getCategory);
router.get("/category/:id", categoryControllers.getOneCategory);

router.post("/users", hashPassword, userControllers.addUser);

router.use(verifyToken); // authentication wall

router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", hashPassword, userControllers.editUser);
router.put("/users/role/:id", userControllers.editUserRole);

router.use(verifyAdmin); // admin wall

router.get("/users", userControllers.getUsers);
router.put("/videos/:id", videoControllers.editVideo);
router.post("/videos", videoControllers.addVideo);
router.delete("/videos/:id", videoControllers.destroyVideo);
router.put("/category/:id", categoryControllers.editCategory);
router.post("/category", categoryControllers.addCategory);
router.delete("/category/:id", categoryControllers.destroyCategory);

router.delete("/users/:id", userControllers.destroyUser);

module.exports = router;
