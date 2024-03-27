/**
 * Middleware files are used to add additional functionality to the request/response cycle of an application.
 * In this specific file, the authMiddleware.js, we handle authentication-related tasks.
 * This includes verifying the authenticity of JSON Web Tokens (JWT) and protecting routes that require authentication.
 */
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read the token from the cookie

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

//Admin Middleware

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
