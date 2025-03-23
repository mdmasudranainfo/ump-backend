import { NextFunction, Request, Response } from "express";
import userService from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Create a new user with the received data
    const user = req.body;
    const newUser = await userService.createUser(user);
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    next(err);
    // res.status(500).json({ success: false, message: "User Created Failed" });
    // console.log(err);
  }
};

export default {
  createUser,
};
