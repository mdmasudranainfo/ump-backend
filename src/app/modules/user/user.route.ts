// this is user route file
import express, { Request, Response } from "express";
import userController from "./user.controller";

const router = express.Router();

router.post("/create", userController.createUser);

// this is just for testing
// router.get("/hello", (req: Request, res: Response) => {
//   console.log("hello from user route");
//   res.send("hello from user route");
// });

export default router;
