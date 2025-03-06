import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";
import { logger, errorLogger } from "./shared/logger";

const port = config.port;

async function main() {
  try {
    await mongoose.connect(`${config.mongodb_uri}`);
    logger.info("🎈🎈 Connected to MongoDB successfully");

    app.listen(port, () => {
      logger.info(`app listening on port ${port}`);
    });
  } catch (err) {
    errorLogger.error(`Fail to Database connect  ${err}`);
  }
}

main();
