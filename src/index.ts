import express = require('express');
import mongoose from 'mongoose';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { RestaurantController } from './interfaces/controllers/restaurantController';
import restaurantRoutes from './interfaces/routes/restaurantRoutes';

// Configuración de variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Registrar middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.use(cors());
app.use(express.json());

// Crear una instancia del controlador
const restaurantController = new RestaurantController();

// Registrar las rutas
app.use('/api/restaurants', restaurantRoutes(restaurantController));

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || '';
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Failed to connect to MongoDB', error));

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));