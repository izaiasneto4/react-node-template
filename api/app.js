import 'dotenv/config';
import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.server.use('/api/v1', routes);
  }
}

export default new App().server;
