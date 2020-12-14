import { Router } from 'express';

// Import the controllers here
const routes = new Router();

// Routes
routes.get('/', (req, res) => {
  res.json('This is the home page');
});

export default routes;
