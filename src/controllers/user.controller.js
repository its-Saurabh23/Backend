import { createUser, fethcAllUsers } from "../models/user.model.js";
import { successResponse } from "../utils/response.js";


export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email required"
      })
    }
    // 👇 INSERT INTO DB
    const userId = await createUser(name, email);

    res.status(201).json({
      message: "User is created Succesfully",
      data: {
        id: userId,
        name,
        email,
      },
      status: "success",
      statusCode: 201,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      statusCode: 500,
      timestamp: new Date().toISOString(),
      message: error.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await fethcAllUsers();
    successResponse(res, users)

  } catch (error) {
    errorResponse(res, error.message);
  }
}