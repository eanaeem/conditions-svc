import dotenv from "dotenv";
dotenv.config();

export default {
  apiPrefix: process.env.API_PREFIX || "/api",
  env: process.env.ENV || 'dev',
  port: process.env.PORT || '9000'
};
