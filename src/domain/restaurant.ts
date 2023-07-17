export class Restaurant {
  constructor(
    public id: string, // El ID único del restaurante
    public name: string, // El nombre único del restaurante
    public address: string, // La dirección del restaurante
    public cuisine: string // La especialidad culinaria del restaurante
  ) {}
}