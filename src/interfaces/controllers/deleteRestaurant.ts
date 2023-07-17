import { Request, Response } from 'express';
import { RestaurantService } from '../../application/restaurantService';
import { RestaurantRepository } from '../../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantService = new RestaurantService(restaurantRepository);

/**
 * Controlador para eliminar un restaurante.
 * Utiliza el servicio de restaurantes para realizar la eliminación y maneja los errores.
 * @param req Objeto Request de Express.
 * @param res Objeto Response de Express.
 */
export async function deleteRestaurant(req: Request, res: Response) {
    // SOLID PRINCIPAL: Open/Closed Principle
    try {
        const result = await restaurantService.deleteRestaurant(req.params.id);
        return res.json(result);
    } catch (err) {
        console.error("Error deleting restaurant:", err);
        return res.status(500).json({ message: "Failed to delete restaurant." });
    }
}
