import { RestaurantRepository } from '../infrastructure/restaurantRepository';
import { Restaurant } from '../domain/restaurant';

export class RestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}

  /**
   * Obtiene todos los restaurantes utilizando el repositorio subyacente.
   * @returns Una promesa que se resuelve con la lista de restaurantes.
   */
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantRepository.getAll();
  }

  /**
   * Obtiene un restaurante por su ID utilizando el repositorio subyacente.
   * @param id - El ID del restaurante a buscar.
   * @returns Una promesa que se resuelve con el restaurante encontrado o null si no se encuentra.
   */
  async getRestaurantById(id: string): Promise<Restaurant | null> {
    return this.restaurantRepository.getById(id);
  }

  /**
   * Obtiene un restaurante por su nombre utilizando el repositorio subyacente.
   * @param name - El nombre del restaurante a buscar.
   * @returns Una promesa que se resuelve con el restaurante encontrado o null si no se encuentra.
   */
  async getRestaurantByName(name: string): Promise<Restaurant | null> {
    return this.restaurantRepository.getByName(name);
  }

  /**
   * Crea un restaurante utilizando el repositorio subyacente.
   * @param restaurantData - Los datos del restaurante a crear.
   * @returns Una promesa que se resuelve con el restaurante creado.
   */
  async createRestaurant(restaurantData: {
    name: string;
    address: string;
    cuisine: string;
  }): Promise<Restaurant> {
    return this.restaurantRepository.create(restaurantData);
  }

  /**
   * Actualiza un restaurante utilizando el repositorio subyacente.
   * @param id - El ID del restaurante a actualizar.
   * @param restaurantData - Los datos del restaurante a actualizar.
   * @returns Una promesa que se resuelve con el restaurante actualizado o null si no se encuentra.
   */
  async updateRestaurant(
    id: string,
    restaurantData: {
      name?: string;
      address?: string;
      cuisine?: string;
    }
  ): Promise<Restaurant | null> {
    return this.restaurantRepository.update(id, restaurantData);
  }

  /**
   * Elimina un restaurante utilizando el repositorio subyacente.
   * @param id - El ID del restaurante a eliminar.
   * @returns Una promesa que se resuelve con un objeto que contiene un mensaje de éxito.
   */
  async deleteRestaurant(id: string): Promise<{ message: string }> {
    return this.restaurantRepository.delete(id);
  }
}
