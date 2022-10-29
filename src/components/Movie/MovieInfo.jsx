import {
  Box,
  Heading,
  Img,
  VStack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const MovieInfo = ({ movie, isLoading, setIsLoading }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    let genreList = [];

    const setMovieGenres = async () => {
      await movie?.genres?.forEach((genre) => {
        genreList.push(genre.name);
      });

      setGenres(genreList.slice(0, 2));
      setIsLoading(false);
    };

    setMovieGenres();
  }, [movie]);

  return (
    <VStack spacing="10" w="100%" alignItems="flex-start">
      <Box w="167px" h="250px">
        <Img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          w="100%"
          _hover={{ transform: "scale(1.05)", boxShadow: "2px 2px 8px black" }}
          transitionDuration="0.5s"
          transition="all 0.5s"
          boxShadow="md"
          h="100%"
          cursor="pointer"
        />
      </Box>
      <VStack alignItems="flex-start" spacing="3">
        <HStack
          spacing="8px"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Heading size="lg" lineHeight="1" fontFamily="body">
            {movie?.title}
          </Heading>
          <Button
            _hover={{ bgColor: "brand.500", textColor: "white" }}
            _active={{ bgColor: "brand.hover" }}
            bgColor="brand.100"
            rounded="md"
            display="flex"
            size="lg"
            alignItems="center"
          >
            Add To Watchlist
          </Button>
        </HStack>
        <HStack textColor="gray.400" spacing="2">
          <Text>{movie?.release_date?.slice(0, 4)}</Text>
          <Text>•</Text>
          <Text>{(movie?.runtime / 60).toFixed(1)} Hours</Text>
          <Text>•</Text>
          <Text>{genres?.join(", ")}</Text>
        </HStack>
        <Box>
          <Text>{movie?.overview}</Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default MovieInfo;
