import { RestaurantController } from '../interfaces/controllers/restaurantController';
import restaurantRoutes from '../interfaces/routes/restaurantRoutes';
import express = require('express');

import RestaurantApplication from '../application/restaurant.application';
import { RestaurantRepository } from '../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantApplication = new RestaurantApplication(restaurantRepository);
const restaurantController = new RestaurantController(restaurantApplication);

export function registerRoutes(app: express.Express) {
    app.use('/api/restaurants', restaurantRoutes(restaurantController));
}
