import Express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import cors from "cors";

import morganBody from "morgan-body";

import router from "./router";
import errorHandlerMdw from './middlewares/errorHandlerMdw';

export default class Server {
  constructor(config) {
    this.config = config;
    this.app = new Express();
  }

  get application() {
    return this.app;
  }

  /**
   * To enable all the setting on our express app
   * @returns -Instance of Current Object
   */
  bootstrap() {
    const { env } = this.config;

    this.initCompress();
    this.initCors();

    this.initJsonParser();
    this.initLogger();
    this.setupRoutes();

    return this;
  }

  /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
  setupRoutes() {
    const { apiPrefix } = this.config;

    // mount all routes on /api path
    this.app.use("/api", router);

    // catch 404 and forward to error handler
    //  this.app.use(notFoundRoute);

    // error handler, send stacktrace only during development
    this.app.use(errorHandlerMdw);

    return this;
  }

  /**
   * Compression of the output
   */
  initCompress() {
    this.app.use(compress());
  }

  /**
   *
   * Lets you to enable cors
   */
  initCors() {
    const corsOptions = {
      origin: "*"
    };

    this.app.use(cors(corsOptions));
  }


  /**
   *  - Parses JSON
   */
  initJsonParser() {
    this.app.use(
      bodyParser.json({
        limit: "50mb"
      })
    );
  }

  /**
   * Enabling Logger 
   */
  initLogger() {
    morganBody(this.app);
  }

  //   initSwagger() {
  //     const { swaggerDefinition, swaggerUrl } = this.config;

  //     const swaggerSetup = new Swagger();

  //     // JSON route
  //     this.app.use(
  //       `${swaggerUrl}.json`,
  //       swaggerSetup.getRouter({
  //         swaggerDefinition,
  //       }),
  //     );

  //     // UI route
  //     const { serve, setup } = swaggerSetup.getUI(swaggerUrl);

  //     this.app.use(swaggerUrl, serve, setup);
  //   }
}
