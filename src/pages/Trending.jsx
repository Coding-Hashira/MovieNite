import { Box, CircularProgress, VStack } from "@chakra-ui/react";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Breadcrumb } from "../components/Global";

const MovieList = lazy(() => import("../components/Global/MovieList"));

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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
    };

    fetchMovies();
  }, []);

  return (
    <VStack
      spacing="10"
      minH="100vh"
      bgColor="blackAlpha.900"
      py={{ base: "20", md: "24" }}
    >
      <Box w="100%" alignSelf="start" px="10">
        <Breadcrumb
          pages={[
            { title: "Home", link: "/" },
            { title: "Trending", link: "/trending" },
          ]}
        />
      </Box>
      <Suspense
        fallback={<CircularProgress isIndeterminate color="brand.100" />}
      >
        <MovieList movies={movies} hasPagination={false} />
      </Suspense>
    </VStack>
  );
};

export default Trending;
