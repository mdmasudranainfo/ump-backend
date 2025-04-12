import status from "http-status";
import ApiError from "../../../error/ApiError";
import { academicSemesterTitleCodeMapper } from "./AcademicSemester.constant";
import IAcademicSemester from "./AcademicSemester.interface";
import AcademicSemester from "./AcademicSemester.model";
import { IPaginationOptions } from "../../../interfaces/IPaginationOptions";
import { IGenericResponse } from "../../../interfaces/common";
import calculatePagination from "../../../helpers/paginationHalper";
import { SortOrder } from "mongoose";

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, "Invalid semester code");
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemesters = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);
  // const { page = 1, limit = 10 } = paginationOptions;
  // const skip = (page - 1) * limit;

  let sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // query
  const result = await AcademicSemester.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//
export const AcademicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemesters,
};
