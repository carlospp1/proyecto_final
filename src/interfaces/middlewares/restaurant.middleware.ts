import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { RestaurantOneValidator } from '../validators/restaurantOne.validator';

class RestaurantMiddleware {
  /**
   * Middleware para validar la solicitud de obtener un usuario específico.
   * @param req Objeto Request de Express.
   * @param _res Objeto Response de Express.
   * @param next Función Next de Express.
   * @returns Una promesa que resuelve a void.
   */
  static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
    const { id } = req.params;

    // Se instancia el validador correspondiente y se le asigna el ID de usuario
    const restaurantListOneValidator = new RestaurantOneValidator();
    restaurantListOneValidator.id = id;

    // Se realiza la validación del objeto utilizando class-validator
    const errors = await validate(restaurantListOneValidator);

    if (errors.length > 0) {
      console.log(errors);
      // Si existen errores de validación, se muestra en la consola y se pasa el control al siguiente middleware con un error
      return next(new Error('Invalid request'));
    }

    // Si no hay errores de validación, se pasa el control al siguiente middleware
    next();
  }
}

// Lista de middlewares
export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
  RestaurantMiddleware.ValidateListOne,
];
