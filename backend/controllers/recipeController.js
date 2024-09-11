// backend/controllers/recipeController.js

const Recipe = require('../models/Recipe');

/**
 * Add a new recipe to the database
 */
exports.addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, cooking_time, image_url } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      cooking_time,
      image_url,
    });

    await newRecipe.save();
    res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ message: 'Failed to add recipe', error });
  }
};

/**
 * Get suggested recipes based on input ingredients
 */
exports.getRecipesByIngredients = async (req, res) => {
  try {
    const { ingredients } = req.body;
    const userIngredients = ingredients.split(',').map((ingredient) => ingredient.trim().toLowerCase());

    // Fetch all recipes
    const recipes = await Recipe.find();

    // Calculate match score for each recipe
    const scoredRecipes = recipes.map((recipe) => {
      const recipeIngredients = recipe.ingredients.map((ingredient) => ingredient.toLowerCase());
      const matchScore = recipeIngredients.filter((ingredient) => userIngredients.includes(ingredient)).length;

      return { ...recipe.toObject(), match_score: matchScore };
    });

    // Sort recipes by match score (highest first) and filter out those with no match
    const sortedRecipes = scoredRecipes
      .filter((recipe) => recipe.match_score > 0)
      .sort((a, b) => b.match_score - a.match_score);

    res.status(200).json(sortedRecipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Failed to fetch recipes', error });
  }
};
