import { RestaurantUpdate } from '../domain/interfaces/restaurantUpdate.interface';
import { Restaurant } from '../domain/restaurant';
import { RestaurantRepository } from '../infrastructure/restaurantRepository';

export default class RestaurantApplication {
	// SOLID PRINCIPAL: INVERSION DEPENDENCY
	// DESING PATTERN: INJECTION DEPENDENCY
	constructor(private readonly restaurantRepository: RestaurantRepository) {}

	/**
	 * Crea un restaurante utilizando el repositorio subyacente.
	 * @param restaurant - El restaurante a crear.
	 * @returns Una promesa que se resuelve con el restaurante creado.
	 */
	createRestaurant(restaurant: Restaurant) {
		return this.restaurantRepository.create(restaurant);
	}

	/**
	 * Obtiene todos los restaurantes utilizando el repositorio subyacente.
	 * @returns Una promesa que se resuelve con la lista de restaurantes.
	 */
	getAllRestaurants() {
		return this.restaurantRepository.getAll();
	}

	/**
	 * Obtiene un restaurante por su ID utilizando el repositorio subyacente.
	 * @param id - El ID del restaurante a buscar.
	 * @returns Una promesa que se resuelve con el restaurante encontrado o null si no se encuentra.
	 */
	getRestaurantById(id: string) {
		return this.restaurantRepository.getById(id);
	}

	/**
	 * Actualiza un restaurante utilizando el repositorio subyacente.
	 * @param id - El ID del restaurante a actualizar.
	 * @param restaurant - Los datos parciales del restaurante a actualizar.
	 * @returns Una promesa que se resuelve con el restaurante actualizado o null si no se encuentra.
	 */
	updateRestaurant(id: string, restaurant: Partial<RestaurantUpdate>) {
		return this.restaurantRepository.update(id, restaurant);
	}

	/**
	 * Elimina un restaurante utilizando el repositorio subyacente.
	 * @param id - El ID del restaurante a eliminar.
	 * @returns Una promesa que se resuelve con un objeto que contiene un mensaje de éxito.
	 */
	deleteRestaurant(id: string) {
		return this.restaurantRepository.delete(id);
	}
}
