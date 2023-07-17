import { getAll } from './methods/getAll';
import { getById } from './methods/getById';
import { getByName } from './methods/getByName';
import { create } from './methods/create';
import { update } from './methods/update';
import { deleteRestaurant } from './methods/delete';

// Repositorio para acceder a los métodos de acceso a datos relacionados con los restaurantes
export class RestaurantRepository {
  getAll = getAll; // Método para obtener todos los restaurantes
  getById = getById; // Método para obtener un restaurante por su ID
  getByName = getByName; // Método para obtener un restaurante por su nombre
  create = create; // Método para crear un nuevo restaurante
  update = update; // Método para actualizar un restaurante
  delete = deleteRestaurant; // Método para eliminar un restaurante
}
