import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Global";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";

function App() {
  return (
    <Box h="100vh" color="white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/discover" element={<Discover />}>
          <Route path="" element={<Movies />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
