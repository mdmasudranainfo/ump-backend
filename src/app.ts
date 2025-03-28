import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();

import cors from "cors";

import globalErrorHandler from "./app/modules/middleware/globalErrorHandler";
import { userRouter } from "./app/modules/user/user.route";
import ApiError from "./error/ApiError";
import ValidationRequest from "./app/modules/middleware/validateRequest";
import { UserValidation } from "./app/modules/user/user.validation";

// cors
app.use(cors());
// parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application
app.use(
  "/api/v1/users/",
  ValidationRequest(UserValidation.createUserValidatorZodSchema),
  userRouter
);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  next();
});
// error handling

// Global error handler
app.use(globalErrorHandler);

export default app;
