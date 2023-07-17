import express = require('express');
import { ENV } from './config';
import { registerMiddleware } from './middleware';
import { registerRoutes } from './routes';

// Crear la aplicación Express
const app = express();

// Registrar middleware
registerMiddleware(app);

// Registrar las rutas
registerRoutes(app);

// Middleware para manejar errores de sintaxis JSON
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (error instanceof SyntaxError && 'body' in error) {
        return res.status(400).send({ message: 'Invalid JSON syntax' }); // Send your custom error message
    }
    next();
});

export default app;