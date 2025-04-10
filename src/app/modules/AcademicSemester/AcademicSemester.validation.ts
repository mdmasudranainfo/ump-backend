import { string, z } from "zod";
import { AcademicSemesterMonths } from "./AcademicSemester.constant";
const AcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(["Autumn", "Fall", "Summer"], {
      required_error: "Title is required",
      invalid_type_error:
        "Title must be one of the following: Autumn, Fall, Summer",
    }),
    year: z
      .number({
        required_error: "Year is required",
        invalid_type_error: "Year must be a number",
      })
      .min(2000)
      .max(2100),
    code: z.enum(["01", "02", "03"], {
      required_error: "Code is required",
      invalid_type_error: "Code must be one of the following: 01, 02, 03",
    }),
    startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
      required_error: "Start month is required",
      invalid_type_error:
        "Start month must be one of the following: January, February, March, April, May, June, July, August, September, October, November, December",
    }),
    endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
      required_error: "End month is required",
      invalid_type_error:
        "End month must be one of the following: January, February, March, April, May, June, July, August, September, October, November, December",
    }),
  }),
});

export default AcademicSemesterZodSchema;
