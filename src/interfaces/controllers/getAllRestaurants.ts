import { Request, Response } from 'express';
import { RestaurantService } from '../../application/restaurantService';
import { RestaurantRepository } from '../../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantService = new RestaurantService(restaurantRepository);

/**
 * Controlador para obtener todos los restaurantes.
 * Utiliza el servicio de restaurantes para realizar la obtención y maneja los errores.
 * @param req Objeto Request de Express.
 * @param res Objeto Response de Express.
 */
export async function getAllRestaurants(req: Request, res: Response) {
    // SOLID PRINCIPAL: Open/Closed Principle
    try {
        const restaurants = await restaurantService.getAllRestaurants();
        res.json(restaurants);
    } catch (err) {
        console.error("Error fetching restaurants:", err);
        return res.status(500).json({ message: "Failed to fetch restaurants." });
    }
}
