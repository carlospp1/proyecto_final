import { Request, Response } from 'express';
import { RestaurantService } from '../../application/restaurantService';
import { RestaurantRepository } from '../../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantService = new RestaurantService(restaurantRepository);

interface MongoDbError extends Error {
    code?: number;
    keyValue?: {
        [key: string]: any;
    };
}

/**
 * Controlador para crear un nuevo restaurante.
 * Utiliza el servicio de restaurantes para realizar la creación y maneja los errores específicos.
 * @param req Objeto Request de Express.
 * @param res Objeto Response de Express.
 */
export async function createRestaurant(req: Request, res: Response) {
    // SOLID PRINCIPAL: Open/Closed Principle
    try {
        // Llama al método createRestaurant del servicio de restaurantes para crear un nuevo restaurante
        const newRestaurant = await restaurantService.createRestaurant(req.body);
        
        // Retorna la respuesta con el nuevo restaurante creado en el código de estado 201 (Creado)
        return res.status(201).json(newRestaurant);
    } catch (err) {
        const error = err as MongoDbError;
        
        // Verifica si el error es causado por un nombre de restaurante duplicado en la base de datos
        if (error.code === 11000 && error.keyValue && error.keyValue.name) {
            // Si el nombre del restaurante ya existe, se retorna un mensaje de error en el código de estado 400 (Solicitud incorrecta)
            return res.status(400).json({ message: "Restaurant name must be unique" });
        }
        
        // Si ocurre cualquier otro tipo de error, se muestra en la consola
        console.error("Error creating restaurant:", err);
        
        // Retorna un mensaje de error genérico en el código de estado 400 (Solicitud incorrecta)
        return res.status(400).json({ message: "Failed to create restaurant." });
    }
}
