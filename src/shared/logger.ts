import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
const { combine, timestamp, label, printf, prettyPrint } = winston.format;

// custom format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp as string);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    label({ label: "Masud" }),
    timestamp(),
    myFormat
    // prettyPrint()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   filename: "logs/success.log",
    //   level: "info",
    // }),
    new DailyRotateFile({
      filename: "logs/success/ump-%DATE%-success.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

const errorLogger = winston.createLogger({
  level: "error",
  format: combine(
    label({ label: "Masud" }),
    timestamp(),
    myFormat
    // prettyPrint()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   filename: "logs/error.log",
    //   level: "error",
    // }),

    new DailyRotateFile({
      filename: "logs/error/ump-%DATE%-error.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export { logger, errorLogger };
