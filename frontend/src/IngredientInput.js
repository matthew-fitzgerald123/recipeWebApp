import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import RecipeService from '../services/RecipeService';

const IngredientInput = ({ setRecipes }) => {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (ingredients.trim() === '') {
      alert('Please enter some ingredients!');
      return;
    }

    try {
      const response = await RecipeService.getRecipesByIngredients(ingredients);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      alert('Error fetching recipes. Please try again later.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Find Recipes by Ingredients
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter ingredients separated by commas"
          variant="outlined"
          fullWidth
          value={ingredients}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Search Recipes
        </Button>
      </form>
    </Container>
  );
};

export default IngredientInput;