import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MoiveCart(props) {
  return (
    <Card 
      sx={{ 
        width: 250, 
        m: 1.5, 
        borderRadius: 3, 
        boxShadow: 3, 
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6,
        },
        backgroundColor: '#f9f9f9'
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={props.poster !== "N/A" ? props.poster : "/download.jpg"}
        alt={props.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{ fontWeight: 'bold', minHeight: '3rem' }}
        >
          {props.title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Year:</strong> {props.year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Type:</strong> {props.types}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
