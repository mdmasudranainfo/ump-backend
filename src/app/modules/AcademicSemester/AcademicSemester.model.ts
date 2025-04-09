import { model, Model, Schema } from "mongoose";
import IAcademicSemester from "./AcademicSemester.interface";

type AcademicSemesterModel = Model<IAcademicSemester, object>;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ["Autumn", "Fall", "Summer"],
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ["01", "02", "03"],
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  "AcademicSemester",
  academicSemesterSchema
);

export default AcademicSemester;
