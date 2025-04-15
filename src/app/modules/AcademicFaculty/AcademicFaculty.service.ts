import { promises } from "winston-daily-rotate-file";
import IAcademicFaculty from "./AcademicFaculty.interface";
import AcademicFaculty from "./AcademicFaculty.model";

const createAcademicFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

export const AcademicFacultyService = {
  createAcademicFaculty,
};
