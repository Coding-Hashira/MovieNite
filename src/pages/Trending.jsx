import { Box, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Breadcrumb, MovieList } from "../components/Global";

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
    <VStack spacing="10" bgColor="blackAlpha.900" py={{ base: "20", md: "24" }}>
      <Box w="100%" alignSelf="start" px="10">
        <Breadcrumb
          pages={[
            { title: "Home", link: "/" },
            { title: "Trending", link: "/trending" },
          ]}
        />
      </Box>
      <MovieList
        movies={movies}
        hasPagination={false}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </VStack>
  );
};

export default Trending;
