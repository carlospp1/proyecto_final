import { Restaurant } from '../../domain/restaurant';
import RestaurantModel from '../restaurantModel';
import { createRestaurantFromModel } from '../restaurantHelpers';

// Obtiene todos los restaurantes de la base de datos
export async function getAll(): Promise<Restaurant[]> {
    //SOLID PRINCIPAL: Open/Closed Principle
    try {
        // Obtiene todos los restaurantes de la base de datos
        const restaurants = await RestaurantModel.find();

        // Convierte los restaurantes encontrados en objetos del dominio utilizando el helper correspondiente
        const restaurantObjects = restaurants.map(createRestaurantFromModel);

        // Retorna los restaurantes encontrados
        return restaurantObjects;
    } catch (error) {
        console.error(error);
        return [];
    }
}
