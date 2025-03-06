import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();

import cors from "cors";
import userService from "./app/modules/user/user.service";

import userRouter from "./app/modules/user/user.route";
import globalErrorHandler from "./app/modules/middleware/globalErrorHandler";

// cors
app.use(cors());
// parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application
app.use("/api/v1/users/", userRouter);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  // throw new ApiError(400, "amar error");
  next("ore baba");
});

// error handling

// Global error handler
app.use(globalErrorHandler);

export default app;
