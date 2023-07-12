import { RestaurantRepository } from '../infrastructure/restaurantRepository';
import { Restaurant } from '../domain/restaurant';

export class RestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantRepository.getAll();
  }

  async getRestaurantById(id: string): Promise<Restaurant | null> {
    return this.restaurantRepository.getById(id);
  }

  async createRestaurant(restaurantData: {
    name: string;
    address: string;
    cuisine: string;
  }): Promise<Restaurant> {
    return this.restaurantRepository.create(restaurantData);
  }

  async updateRestaurant(
    id: string,
    restaurantData: {
      name?: string;
      address?: string;
      cuisine?: string;
    }
  ): Promise<Restaurant | null> {
    return this.restaurantRepository.update(id, restaurantData);
  }

  async deleteRestaurant(id: string): Promise<{ message: string }> {
    return this.restaurantRepository.delete(id);
  }
}
