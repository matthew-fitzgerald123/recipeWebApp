// backend/routes/recipes.js

const express = require('express');
const router = express.Router();
const { getRecipesByIngredients, addRecipe } = require('../controllers/recipeController');

// Route to add a new recipe
router.post('/', addRecipe);

// Route to get recipes based on provided ingredients
router.post('/suggestions', getRecipesByIngredients);

module.exports = router;
