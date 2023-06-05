const asyncHandler = require("express-async-handler");
const User = require("../models/UserModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @desc User register system
 * @route POST /auth/register
 * @access PUBLIC
 */

const registerUser = asyncHandler(async (req, res) => {
  // GetData.
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check email already exits or not.
  const existsEmail = await User.findOne({ email });

  if (existsEmail) {
    return res.status(400).json({ message: "Email already exists." });
  }

  // Now create hashPassword.
  const hashPassword = await bcrypt.hash(password, 10);

  // Create User.
  const user = await User.create({ name, email, password: hashPassword });

  if (!user) {
    return res.status(400).json({ message: "Invalid user data." });
  } else {
    return res.status(200).json({ message: "User register successful." });
  }
});

/**
 * @desc User login system
 * @route POST /auth/login
 * @access PUBLIC
 */

const loginUser = asyncHandler(async (req, res) => {
  // Get loginUserData.
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Chect User.
  const isUser = await User.findOne({ email });

  if (!isUser) {
    return res.status(400).json({ message: "User not found." });
  }

  // Password Check.
  const isValidPassword = await bcrypt.compare(password, isUser.password);

  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid password." });
  }

  // Create an accessToken.
  const accessToken = jwt.sign(
    { email: isUser.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    }
  );

  // Access token save to cookie memory.
  res
    .cookie("accessToken", accessToken, {
      httpOnly: false,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .json({ token: accessToken, user: isUser });
});

/**
 * @desc GET LoginUserData.
 * @route GET /auth/me
 * @access PRIVATE
 */
const me = (req, res) => {
  res.status(200).json({ user: req.me });
};

/**
 * @desc User logout system
 * @route POST /auth/logout
 * @access PRIVATE
 */

const userLogout = (req, res) => {
  res
    .status(200)
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: false,
    })
    .json({ message: "Louout successful." });
};

// Export controllers.
module.exports = {
  registerUser,
  loginUser,
  me,
  userLogout,
};
