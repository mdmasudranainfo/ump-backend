import { ZodError, ZodIssue } from "zod";
import { IGenericErrorMessage } from "../interfaces/error";

const handleZodError = (err: ZodError) => {
  const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
    return {
      path: String(issue.path[issue.path.length - 1]),
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: "Bad Request",
    errorMessages: errors,
  };
};

export default handleZodError;
