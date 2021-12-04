import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    introduction,
    phone,
    experiance,
    achievements,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    introduction,
    phone,
    experiance,
    achievements,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      introduction: user.introduction,
      phone: user.phone,
      experiance: user.experiance,
      achievements: user.achievements,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
export { registerUser, getUsers, getUserById };
