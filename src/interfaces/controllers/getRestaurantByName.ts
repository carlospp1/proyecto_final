import { Request, Response } from 'express';
import { RestaurantService } from '../../application/restaurantService';
import { RestaurantRepository } from '../../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantService = new RestaurantService(restaurantRepository);

/**
 * Controlador para obtener un restaurante por su nombre.
 * Utiliza el servicio de restaurantes para realizar la obtención y maneja los errores.
 * @param req Objeto Request de Express.
 * @param res Objeto Response de Express.
 */
export async function getRestaurantByName(req: Request, res: Response) {
    // SOLID PRINCIPAL: Open/Closed Principle
    try {
        const restaurant = await restaurantService.getRestaurantByName(req.params.name);
        if (!restaurant) {
            // Si no se encuentra un restaurante con el nombre especificado, se retorna un mensaje de error en el código de estado 404 (No encontrado)
            return res.status(404).json({ message: 'Cannot find restaurant' });
        }
        // Si se encuentra el restaurante, se retorna en la respuesta en formato JSON
        res.json(restaurant);
    } catch (err) {
        console.error("Error fetching restaurant by name:", err);
        // Si ocurre algún error durante la obtención del restaurante, se muestra en la consola y se retorna un mensaje de error genérico en el código de estado 500 (Error interno del servidor)
        return res.status(500).json({ message: "Error fetching restaurant by name." });
    }
}
