import { Card, CardContent, Typography, Box } from '@mui/material';
import React from 'react';

const Cards = ({ branch, description }) => {
  return (
    <Box sx={{ minWidth: '150px', margin: '10px', flexShrink: 0 }}>
      <Card sx={{ width: '400px', backgroundColor: '#C8C0C8' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: 'gray', borderBottom: '1px solid gray', pb: 1 }}>
            {branch}
          </Typography>
          <Typography sx={{ fontSize: 10, pt: 1 }} component="div">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;
