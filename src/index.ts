// index.ts
import expressApp from './config/express.config';
import connectToDb from './config/mongoose.config';

// Conectar a MongoDB
connectToDb();

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
expressApp.listen(PORT, () => console.log(`Server running on port ${PORT}`));
