import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const FeaturedProducts = () => {
  // Dummy data for featured products
  const featuredProducts = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description of Product 1',
      imageUrl: '/product1.jpg', // Assuming you have product images in your public folder
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description of Product 2',
      imageUrl: '/product2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description of Product 3',
      imageUrl: '/product3.jpg',
    },
  ];

  return (
    <div className="py-8 px-3">
      <Typography variant="h4" align="center" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {featuredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedProducts;
