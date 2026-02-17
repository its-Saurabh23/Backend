import redisClient from "../config/redis.js";
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
    const cacheKey = "users:all";
    const cachedUsers = await redisClient.get(cacheKey);

    if (cachedUsers) {
      console.log("⚡ Returning users from Redis");
      return successResponse(res, JSON.parse(cachedUsers));
    }

    console.log("🐌 Fetching users from Database");
    //Fetching for DB
    const users = await fethcAllUsers();

   await redisClient.set(cacheKey, JSON.stringify(users), { ex: 60 });
   successResponse(res, users)

  } catch (error) {
    errorResponse(res, error.message);
  }
}