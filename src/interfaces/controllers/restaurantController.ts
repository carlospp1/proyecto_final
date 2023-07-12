import { Request, Response } from 'express';
import { RestaurantService } from '../../application/restaurantService';
import { RestaurantRepository } from '../../infrastructure/restaurantRepository';

const restaurantRepository = new RestaurantRepository();
const restaurantService = new RestaurantService(restaurantRepository);

export class RestaurantController {
  // Obtener todos los restaurantes
  async getAllRestaurants(req: Request, res: Response) {
    try {
      const restaurants = await restaurantService.getAllRestaurants();
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Obtener un restaurante por ID
  async getRestaurantById(req: Request, res: Response) {
    try {
      const restaurant = await restaurantService.getRestaurantById(req.params.id);
      if (restaurant == null) {
        return res.status(404).json({ message: 'Cannot find restaurant' });
      }
      res.json(restaurant);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  // Crear un nuevo restaurante
  async createRestaurant(req: Request, res: Response) {
    try {
      const newRestaurant = await restaurantService.createRestaurant(req.body);
      res.status(201).json(newRestaurant);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // Actualizar un restaurante
  async updateRestaurant(req: Request, res: Response) {
    try {
      const updatedRestaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
      res.json(updatedRestaurant);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Eliminar un restaurante
  async deleteRestaurant(req: Request, res: Response) {
    try {
      const result = await restaurantService.deleteRestaurant(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
