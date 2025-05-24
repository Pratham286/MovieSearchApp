import { Box } from "@mui/material";
import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import MovieSearch from "./pages/MovieSearch";
import MovieList from "./pages/MovieList";
import {Routes , Route} from "react-router-dom"
function App() {


  return (
    <Box>
      <Header/>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
      <Footer/>
    </Box>
      )
}

export default App
