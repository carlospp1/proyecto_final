import { Restaurant } from '../../domain/restaurant';
import RestaurantModel from '../restaurantModel';
import { createRestaurantFromModel } from '../restaurantHelpers';

// Obtiene un restaurante de la base de datos por su ID
export async function getById(id: string): Promise<Restaurant | null> {
    //SOLID PRINCIPAL: Open/Closed Principle
    try {
        // Busca el restaurante con el ID proporcionado
        const restaurant = await RestaurantModel.findById(id);

        // Si el restaurante es encontrado, lo convierte en un objeto del dominio utilizando el helper correspondiente
        // De lo contrario, retorna null
        const restaurantObject = restaurant ? createRestaurantFromModel(restaurant) : null;

        // Retorna el restaurante encontrado o null
        return restaurantObject;
    } catch (error) {
        console.error(error);
        return null;
    }
}
