import jwt from "jsonwebtoken";

import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user & get token
//@route POST /api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set JWT as HTTP-Only cookie

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: (process.env.NODE_ENV = "development"),
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.send("auth user");
});

//@desc Register new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Logout user / clear cookie
//@route GET /api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out succesfully" });
});

//@desc Get use profile
//@route GET /api/users/profile
//@access Public

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//@desc Update use profile
//@route PUT /api/users/profile
//@access Public

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//@desc Get users
//@route PUT /api/users
//@access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

//@desc Delete user
//@route DELTE /api/users/:id
//@access Public

const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

//@desc Update user
//@route PUT /api/users/:id
//@access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
