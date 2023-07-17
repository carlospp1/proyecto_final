import { Restaurant } from '../../domain/restaurant';
import RestaurantModel from '../restaurantModel';
import { createRestaurantFromModel } from '../restaurantHelpers';

// Crea un nuevo restaurante en la base de datos
export async function create(restaurantData: {
    // SOLID PRINCIPAL: Open/Closed Principle
    
    name: string; // Nombre del restaurante
    address: string; // Dirección del restaurante
    cuisine: string; // Especialidad culinaria del restaurante
}): Promise<Restaurant> {
    try {
        // Crea una nueva instancia del modelo de restaurante con los datos proporcionados
        const restaurant = new RestaurantModel(restaurantData);

        // Guarda el restaurante en la base de datos
        const savedRestaurant = await restaurant.save();

        // Convierte el restaurante guardado en un objeto del dominio utilizando el helper correspondiente
        const restaurantObject = createRestaurantFromModel(savedRestaurant);

        // Retorna el restaurante creado
        return restaurantObject;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
