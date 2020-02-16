import config from "./config";
import Server from "./Server";
import logger from "./utils/logger";

const server = new Server(config);

server.bootstrap();

const runningServer = server.application.listen(config.port);

runningServer.on("listening", async () => {
  const ann = `|| App is running at port '${config.port}' in '${config.env}' mode ||`;

  logger.info(ann.replace(/[^]/g, "-"));
  logger.info(ann);
  logger.info(ann.replace(/[^]/g, "-"));
  logger.info("Press CTRL-C to stop\n");
});

export default server;
