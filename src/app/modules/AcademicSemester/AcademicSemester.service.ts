import status from "http-status";
import ApiError from "../../../error/ApiError";
import { academicSemesterTitleCodeMapper } from "./AcademicSemester.constant";
import IAcademicSemester from "./AcademicSemester.interface";
import AcademicSemester from "./AcademicSemester.model";

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, "Invalid semester code");
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemester,
};
