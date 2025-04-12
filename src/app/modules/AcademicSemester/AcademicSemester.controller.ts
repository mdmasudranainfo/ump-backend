import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./AcademicSemester.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { IPaginationOptions } from "../../../interfaces/IPaginationOptions";
import pick from "../../../shared/pick";
import { paginationFills } from "../../../constants/pagination";

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

const getAllAcademicSemesters = catchAsync(async (req, res, next) => {
  // pagination start
  // const paginationOptions = {
  //   page: Number(req.query.page),
  //   limit: Number(req.query.limit),
  //   sortBy: req.query.sortBy as string,
  //   sortOrder: req.query.sortOrder,
  // };

  const paginationOptions = pick(req.query, paginationFills);

  // pagination start end
  const result = await AcademicSemesterService.getAllAcademicSemesters(
    paginationOptions
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
};
