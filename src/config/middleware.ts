import express = require('express');
import cors from 'cors';

export function registerMiddleware(app: express.Express) {
    // SOLID PRINCIPAL: Single-responsibility principle
    // Middleware para registrar y mostrar información sobre las solicitudes entrantes
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        next();
    });

    app.use(cors());
    app.use(express.json());
}
