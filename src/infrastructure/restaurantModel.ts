import mongoose from 'mongoose';

// Define el esquema del modelo de restaurante utilizando Mongoose
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true  // Asegura que el nombre sea único
    },
    address: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    }
});

// Crea el modelo de restaurante utilizando el esquema definido y lo exporta
const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

export default RestaurantModel;
