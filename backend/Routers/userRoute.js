import express from "express";

const router = express.Router();

import {
  registerUser,
  getUsers,
  getUserById,
} from "../Controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);

router.route("/:id").get(getUserById);

export default router;
