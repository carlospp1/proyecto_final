import { IsNotEmpty, IsString, MinLength } from 'class-validator';

/**
 * Clase que define el validador para la solicitud de obtener un usuario específico.
 */
export class RestaurantOneValidator {
  /**
   * Propiedad que representa el ID del usuario a validar.
   */
  @IsString({ message: 'id must be a string' })
  @IsNotEmpty({ message: 'id must not be empty' })
  @MinLength(10, { message: 'id is too short' })
  id: string = ''; // inicializar con un valor por defecto
}
