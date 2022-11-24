import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Global";
import Footer from "./components/Global/Footer";
import { Discover, Home, Movie, Movies, Search, Trending } from "./pages";

function App() {
  return (
    <Box h="100vh" fontFamily="body" color="white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/discover" element={<Discover />}>
          <Route path="" element={<Movies />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
