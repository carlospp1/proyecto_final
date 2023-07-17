import { Router } from 'express';
import { RestaurantController } from '../controllers/restaurantController';
import { MiddlewareListOne } from '../middlewares/restaurant.middleware';

/**
 * Función que define las rutas relacionadas con los restaurantes y devuelve un enrutador de Express.
 * @param restaurantController Instancia del controlador de restaurantes.
 * @returns Un enrutador de Express configurado con las rutas relacionadas con los restaurantes.
 */
export default (restaurantController: RestaurantController) => {
    const router = Router();

    // Ruta para obtener todos los restaurantes
    router.get('/', restaurantController.getAllRestaurants);

    // Ruta para obtener un restaurante por su ID
    router.get('/:id', MiddlewareListOne, restaurantController.getRestaurantById);

    // Ruta para crear un nuevo restaurante
    router.post('/', restaurantController.createRestaurant);

    // Ruta para actualizar un restaurante existente
    router.put('/:id', MiddlewareListOne, restaurantController.updateRestaurant);

    // Ruta para eliminar un restaurante existente
    router.delete('/:id', MiddlewareListOne, restaurantController.deleteRestaurant);

    return router;
};