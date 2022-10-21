import { CircularProgress, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Poster from "./Poster";

const Row = ({ genre, genreId, allGenres }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json?.results);
        setIsLoading(false);
      });
  }, []);
  return (
    <VStack spacing="10" alignItems="flex-start" padding="10">
      <Heading fontFamily="body" fontSize="2xl">{`Top in ${genre}`}</Heading>
      <HStack
        overflowX="scroll"
        w="calc(100vw - 5rem)"
        className="scroll-none"
        scrollBehavior="smooth"
      >
        {isLoading ? (
          <CircularProgress isIndeterminate color="brand.500" />
        ) : (
          movies.map((movie, index) => (
            <Poster allGenres={allGenres} movie={movie} key={index} />
          ))
        )}
      </HStack>
    </VStack>
  );
};

export default Row;
