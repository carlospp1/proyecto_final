import { Document } from 'mongoose';
import { Restaurant } from '../domain/restaurant';

interface RestaurantDocument extends Document {
    name: string;
    address: string;
    cuisine: string;
}

// Convierte un documento de restaurante en un objeto del dominio Restaurant
export function createRestaurantFromModel(restaurantDocument: RestaurantDocument): Restaurant {
    return new Restaurant(
        restaurantDocument._id.toString(), // Convierte el ID del documento en una cadena
        restaurantDocument.name, // Obtiene el nombre del restaurante del documento
        restaurantDocument.address, // Obtiene la dirección del restaurante del documento
        restaurantDocument.cuisine // Obtiene la especialidad culinaria del restaurante del documento
    );
}
