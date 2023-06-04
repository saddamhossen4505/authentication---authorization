const express = require("express");
const {
  registerUser,
  loginUser,
  userLogout,
  me,
} = require("../controllers/loginUserController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

// Init router.
const router = express.Router();

// Routes.
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(authorizationMiddleware, me);
router.route("/logout").post(userLogout);

// Export router.
module.exports = router;
