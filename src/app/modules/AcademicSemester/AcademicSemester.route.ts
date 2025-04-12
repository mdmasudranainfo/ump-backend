// this is user route file
import express from "express";
import { AcademicSemesterController } from "./AcademicSemester.controller";
import ValidationRequest from "../middleware/validateRequest";
import AcademicSemesterZodSchema from "./AcademicSemester.validation";

const router = express.Router();

router.post(
  "/create",
  ValidationRequest(AcademicSemesterZodSchema),
  AcademicSemesterController.createAcademicSemester
);

router.get("/all", AcademicSemesterController.getAllAcademicSemesters);

export const academicSemesterRoute = router;
