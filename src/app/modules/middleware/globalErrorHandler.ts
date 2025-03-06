import { NextFunction, Request, Response } from "express";
import { IGenericMessage } from "../../../interfaces/error";
import config from "../../../config";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ ami: err });

  let statusCode = 500;
  let message = "internal server error";
  let errorMessage: IGenericMessage[] = [];
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env === "development" ? err.stack : undefined,
  });
};

export default globalErrorHandler;
