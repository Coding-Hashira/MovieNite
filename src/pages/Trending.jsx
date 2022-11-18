import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "../components/Global/MovieList";

const Trending = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=8be9eb85a8d025c42456c206a5d94317"
      )
        .then((res) => res.json())
        .then((json) => {
          setMovies(json?.results);
          console.log(json);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <Box bgColor="blackAlpha.900" py={{ base: "20", md: "24" }}>
      <MovieList
        movies={movies}
        hasPagination={false}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Box>
  );
};

export default Trending;