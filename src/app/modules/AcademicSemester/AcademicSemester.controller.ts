import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./AcademicSemester.service";

const createAcademicSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(data);
    res.status(200).json({
      status: "success",
      message: "Academic semester created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createAcademicSemester,
};
