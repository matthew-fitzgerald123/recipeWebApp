import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recipes'; // Replace with your backend API URL

class RecipeService {
  static async getRecipesByIngredients(ingredients) {
    try {
      const response = await axios.post(API_URL, { ingredients });
      return response;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
}

export default RecipeService;