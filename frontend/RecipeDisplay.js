import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const RecipeDisplay = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={recipe.image_url || 'https://via.placeholder.com/150'}
              alt={recipe.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {recipe.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cooking Time: {recipe.cooking_time} mins
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.instructions}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeDisplay;