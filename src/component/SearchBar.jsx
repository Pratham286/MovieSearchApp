import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useNavigate } from 'react-router-dom';

const MovieType = [
    {
      value: 'any',
      label: 'Any'
    },
  {
    value: 'movie',
    label: 'Movie',
  },
  {
    value: 'series',
    label: 'Series',
  },
  {
    value: 'episode',
    label: 'Episode',
  },
]


export default function SearchBar() {

    const date = new Date();
    const maxYear = date.getFullYear();

    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [movieType, setMovieType] = useState("any");

    const navigate = useNavigate();

    const handleClick = (e) => 
    {
        e.preventDefault();
        // const num1 = Number(movieYear); 
        // if(movieYear === '' || (num1 >= 1950 && num1 <=2025))
        // {
            navigate("/movies", {state: {movieTitle, movieYear, movieType}});
        // }
        // else{
        //     alert("Year should be between 1950 and 2025")
        // }
        // console.log(movieTitle);
        // console.log(movieYear);
        // console.log(movieType);
    }
  return (
    <Box 
    sx={{margin: "5px"}}
    component="form"
    onSubmit={handleClick}
    >
        <TextField 
        sx={{width: "250px"}}
        type="text"
        id="movie-title"
        label="Movie Title"
        value={movieTitle}
        onChange={(e) => {setMovieTitle(e.target.value)}}
        required
        >
        </TextField>
        <TextField 
        sx={{width: "150px"}}
        id="movie-year"
        label="Year"
        type="number"
        value={movieYear}
        onChange={(e) => {
            const val = e.target.value;
            const year = Number(val);
            // if(year === '' || (Number)year >= 1950 && (Number)year <= 2025)
            // {
                setMovieYear(year);
            // }  
        }}
        inputProps={{min: 1950, max:maxYear}}
        >


        </TextField>
        <TextField
          sx={{width: "150px"}}
          id="movie-type"
          select
          label="Movie Type"
          defaultValue="Any"
          type="text"
          value={movieType}
          onChange={(e) => {setMovieType(e.target.value)}}
          //   helperText="Please select movie type"
        >
          {MovieType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit">Search</Button>
    </Box>
  )
}
