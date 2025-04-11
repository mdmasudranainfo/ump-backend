import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./AcademicSemester.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(data);

    sendResponse(res, {
      statusCode: status.CREATED,
      success: true,
      message: "Academic semester created successfully",
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
