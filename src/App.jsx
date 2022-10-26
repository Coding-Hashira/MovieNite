import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Global";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <Box h="100vh" color="white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Box>
  );
}

export default App;
