import { Restaurant } from '../domain/restaurant';
import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

export class RestaurantRepository {
    async getAll(): Promise<Restaurant[]> {
      try {
        const restaurants = await RestaurantModel.find();
        return restaurants.map(
          (r) => new Restaurant(r._id.toString(), r.name, r.address, r.cuisine)
        );
      } catch (error) {
        console.error(error);
        return [];
      }
    }

  async getById(id: string): Promise<Restaurant | null> {
    try {
        const restaurant = await RestaurantModel.findById(id);
        return restaurant
          ? new Restaurant(
              restaurant._id.toString(),
              restaurant.name,
              restaurant.address,
              restaurant.cuisine
            )
          : null;
      } catch (error) {
        console.error(error);
        return null;
      }
  }

  async create(restaurantData: {
    name: string;
    address: string;
    cuisine: string;
  }): Promise<Restaurant> {
    try {
      const restaurant = new RestaurantModel(restaurantData);
      const savedRestaurant = await restaurant.save();
      return new Restaurant(savedRestaurant._id.toString(), savedRestaurant.name, savedRestaurant.address, savedRestaurant.cuisine);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(
    id: string,
    restaurantData: {
      name?: string;
      address?: string;
      cuisine?: string;
    }
  ): Promise<Restaurant | null> {
    try {
      const restaurant = await RestaurantModel.findById(id);
      if (!restaurant) {
        return null;
      }

      if (restaurantData.name) {
        restaurant.name = restaurantData.name;
      }
      if (restaurantData.address) {
        restaurant.address = restaurantData.address;
      }
      if (restaurantData.cuisine) {
        restaurant.cuisine = restaurantData.cuisine;
      }

      const savedRestaurant = await restaurant.save();
      return new Restaurant(
        savedRestaurant._id.toString(),
        savedRestaurant.name,
        savedRestaurant.address,
        savedRestaurant.cuisine
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async delete(id: string): Promise<{ message: string }> {
    try {
      await RestaurantModel.findByIdAndDelete(id);
      return { message: 'Restaurant has been deleted' };
    } catch (error) {
      console.error(error);
      return { message: 'Error deleting restaurant' };
    }
  }
}
