import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Button,
  Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MoiveCart from '../component/MoiveCart';

export default function MovieList() {
  const location = useLocation();
  const { movieTitle, movieType, movieYear } = location.state;

  const [page, setPage] = useState(1);
  const [content, setContent] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const query = `s=${movieTitle}${movieYear ? `&y=${movieYear}` : ''}${
    movieType !== 'any' ? `&type=${movieType}` : ''
  }&page=${page}`;

  useEffect(() => {
    setIsLoaded(false); // Reset loading for each page
    axios
      .get(`https://omdbapi.com/?${query}&apikey=136399a2`)
      .then((res) => {
        setContent(res.data);
        setIsLoaded(true);
      });
  }, [query]);

  const totalResults = parseInt(content.totalResults || '0');
  const totalPages = Math.ceil(totalResults / 10);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (!isLoaded) {
    return (
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={60} thickness={5} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        textAlign="center"
        mb={4}
        sx={{ fontWeight: 'bold', color: '#333' }}
      >
        Search Results for: <span style={{ color: '#1976d2' }}>{movieTitle}</span>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {content.Search ? (
          content.Search.map((movie) => (
            <MoiveCart
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              types={movie.Type}
              poster={movie.Poster}
            />
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', color: '#888', mt: 5 }}
          >
            No movies found for your search.
          </Typography>
        )}
      </Box>

      {totalPages > 1 && (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          mt={4}
          flexWrap="wrap"
        >
          {pageNumbers.map((num) => (
            <Button
              key={num}
              variant={num === page ? 'contained' : 'outlined'}
              onClick={() => setPage(num)}
            >
              {num}
            </Button>
          ))}
        </Stack>
      )}
    </Container>
  );
}
