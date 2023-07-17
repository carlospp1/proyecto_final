import { Request, Response } from 'express';
import { getAllRestaurants } from './getAllRestaurants';
import { getRestaurantById } from './getRestaurantById';
import { createRestaurant } from './createRestaurant';
import { updateRestaurant } from './updateRestaurant';
import { deleteRestaurant } from './deleteRestaurant';
import { getRestaurantByName } from './getRestaurantByName';
import RestaurantApplication from '../../application/restaurant.application';

export class RestaurantController {
  constructor(private restaurantApplication: RestaurantApplication) {
    // DESING PATTERN: Inyección de Dependencias

    // Se realiza la vinculación de los métodos con la instancia de la clase
    this.createRestaurant = this.createRestaurant.bind(this);
    this.getAllRestaurants = this.getAllRestaurants.bind(this);
    this.getRestaurantById = this.getRestaurantById.bind(this);
    this.updateRestaurant = this.updateRestaurant.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
  }

  /**
   * Controlador para obtener todos los restaurantes.
   * @param req Objeto Request de Express.
   * @param res Objeto Response de Express.
   * @returns La respuesta con los restaurantes en formato JSON.
   */
  async getAllRestaurants(req: Request, res: Response) {
    return getAllRestaurants(req, res);
  }

  /**
   * Controlador para obtener un restaurante por su ID.
   * @param req Objeto Request de Express.
   * @param res Objeto Response de Express.
   * @returns La respuesta con el restaurante en formato JSON.
   */
  async getRestaurantById(req: Request, res: Response) {
    return getRestaurantById(req, res);
  }

  /**
   * Controlador para crear un nuevo restaurante.
   * @param req Objeto Request de Express.
   * @param res Objeto Response de Express.
   * @returns La respuesta con el nuevo restaurante creado en formato JSON.
   */
  async createRestaurant(req: Request, res: Response) {
    return createRestaurant(req, res);
  }

  /**
   * Controlador para actualizar un restaurante existente.
   * @param req Objeto Request de Express.
   * @param res Objeto Response de Express.
   * @returns La respuesta con el restaurante actualizado en formato JSON.
   */
  async updateRestaurant(req: Request, res: Response) {
    return updateRestaurant(req, res);
  }

  /**
   * Controlador para eliminar un restaurante existente.
   * @param req Objeto Request de Express.
   * @param res Objeto Response de Express.
   * @returns La respuesta con un mensaje de éxito en formato JSON.
   */
  async deleteRestaurant(req: Request, res: Response) {
    return deleteRestaurant(req, res);
  }

  /**
   * Controlador para obtener un restaurante por su nombre.
   * @param req Objeto Request de Express.
   * @param res Objeto Response de Express.
   * @returns La respuesta con el restaurante en formato JSON.
   */
  async getRestaurantByName(req: Request, res: Response) {
    return getRestaurantByName(req, res);
  }
}
