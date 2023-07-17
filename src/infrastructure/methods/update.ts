import { Restaurant } from '../../domain/restaurant';
import RestaurantModel from '../restaurantModel';
import { createRestaurantFromModel } from '../restaurantHelpers';

// Actualiza un restaurante en la base de datos por su ID
export async function update(
    //SOLID PRINCIPAL: Open/Closed Principle
    id: string, // ID del restaurante a actualizar
    restaurantData: {
        name?: string; // Nuevo nombre del restaurante (opcional)
        address?: string; // Nueva dirección del restaurante (opcional)
        cuisine?: string; // Nueva especialidad culinaria del restaurante (opcional)
    }
): Promise<Restaurant | null> {
    try {
        // Busca el restaurante con el ID proporcionado
        const restaurant = await RestaurantModel.findById(id);

        // Si el restaurante no es encontrado, retorna null
        if (!restaurant) {
            return null;
        }

        // Actualiza las propiedades del restaurante según los valores proporcionados en restaurantData
        if (restaurantData.name) {
            restaurant.name = restaurantData.name;
        }
        if (restaurantData.address) {
            restaurant.address = restaurantData.address;
        }
        if (restaurantData.cuisine) {
            restaurant.cuisine = restaurantData.cuisine;
        }

        // Guarda el restaurante actualizado en la base de datos
        const savedRestaurant = await restaurant.save();

        // Convierte el restaurante actualizado en un objeto del dominio utilizando el helper correspondiente
        const restaurantObject = createRestaurantFromModel(savedRestaurant);

        // Retorna el restaurante actualizado
        return restaurantObject;
    } catch (error) {
        console.error(error);
        return null;
    }
}
