import { Router } from 'express';
import { RestaurantController } from '../controllers/restaurantController';

export default (restaurantController: RestaurantController) => {
    const router = Router();

    router.get('/', restaurantController.getAllRestaurants);
    router.get('/:id', restaurantController.getRestaurantById);
    router.post('/', restaurantController.createRestaurant);
    router.put('/:id', restaurantController.updateRestaurant);
    router.delete('/:id', restaurantController.deleteRestaurant);

    return router;
};
