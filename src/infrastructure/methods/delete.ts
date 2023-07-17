import RestaurantModel from '../restaurantModel';

// Elimina un restaurante de la base de datos por su ID
export async function deleteRestaurant(id: string): Promise<{ message: string }> {
    // SOLID PRINCIPAL: Open/Closed Principle
    try {
        // Busca y elimina el restaurante con el ID proporcionado
        await RestaurantModel.findByIdAndDelete(id);

        // Retorna un mensaje indicando que el restaurante ha sido eliminado
        return { message: 'Restaurant has been deleted' };
    } catch (error) {
        console.error(error);
        return { message: 'Error deleting restaurant.' };
    }
}
