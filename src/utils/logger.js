import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});
const logger = createLogger({
  format: combine(timestamp(), myFormat, format.colorize()),
  transports: [
    new transports.Console()
  ]
});


export default logger;
