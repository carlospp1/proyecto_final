import { Request, Response } from 'express';
import { RestaurantService } from '../../application/restaurantService';
import { RestaurantRepository } from '../../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantService = new RestaurantService(restaurantRepository);

/**
 * Controlador para actualizar un restaurante existente.
 * @param req Objeto Request de Express.
 * @param res Objeto Response de Express.
 * @returns La respuesta con el restaurante actualizado en formato JSON.
 */
export async function updateRestaurant(req: Request, res: Response) {
  // SOLID PRINCIPAL: Open/Closed Principle

  const { name } = req.body;

  try {
    const existingRestaurant = await restaurantRepository.getByName(name);
    if (existingRestaurant && existingRestaurant.id !== req.params.id) {
      // Si existe un restaurante con el mismo nombre pero con un ID diferente al del restaurante que se está actualizando, se retorna un mensaje de error en el código de estado 400 (Solicitud incorrecta)
      return res.status(400).json({ message: "Restaurant name must be unique" });
    }

    // Se llama al método del servicio de restaurantes para actualizar el restaurante con el ID proporcionado y los datos de la solicitud
    const updatedRestaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
    if (!updatedRestaurant) {
      // Si no se encuentra el restaurante con el ID proporcionado, se retorna un mensaje de error en el código de estado 404 (No encontrado)
      return res.status(404).json({ message: "Restaurant not found" });
    }
    // Se retorna el restaurante actualizado en la respuesta en formato JSON
    return res.json(updatedRestaurant);
  } catch (err) {
    console.error("Error updating restaurant:", err);
    // Si ocurre algún error durante la actualización del restaurante, se muestra en la consola y se retorna un mensaje de error genérico en el código de estado 500 (Error interno del servidor)
    return res.status(500).json({ message: "Failed to update restaurant." });
  }
}
