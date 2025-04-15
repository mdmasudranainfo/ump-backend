// this is user route file
import express from "express";
import { userRouter } from "../modules/user/user.route";
import { academicSemesterRoute } from "../modules/AcademicSemester/AcademicSemester.route";
import { academicFacultyRoute } from "../modules/AcademicFaculty/AcademicFaculty.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/academic-semester",
    route: academicSemesterRoute,
  },
  {
    path: "/academic-faculty",
    route: academicFacultyRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use("/users", userRouter);
// router.use("/academic-semester", academicSemesterRoute);

export default router;
