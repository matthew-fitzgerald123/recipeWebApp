// backend/models/Recipe.js

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // Array of ingredient strings
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  cooking_time: {
    type: Number, // Cooking time in minutes
    required: true,
  },
  image_url: {
    type: String, // URL for the recipe image
    required: false,
  },
  match_score: {
    type: Number, // Calculated score for ingredient match (used in recipe suggestion)
    required: false,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
