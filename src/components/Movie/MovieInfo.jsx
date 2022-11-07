import {
  Box,
  Heading,
  Img,
  VStack,
  HStack,
  Text,
  Button,
  Stack,
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
    <VStack
      spacing={{ base: "5", md: "10" }}
      w="100%"
      textAlign={{ base: "center", md: "left" }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
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
      <VStack alignItems={{ base: "center", md: "flex-start" }} spacing="3">
        <Stack
          spacing="8px"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Heading
            size={{ base: "md", md: "lg" }}
            lineHeight="1"
            textAlign={{ base: "center", md: "left" }}
            fontFamily="body"
          >
            {movie?.title}
          </Heading>
          <Button
            _hover={{ bgColor: "brand.500", textColor: "white" }}
            _active={{ bgColor: "brand.hover" }}
            bgColor="brand.100"
            rounded="md"
            display={{ base: "none", md: "flex" }}
            size="lg"
            alignItems="center"
          >
            Add To Watchlist
          </Button>
        </Stack>
        <HStack textColor="gray.400" spacing={{ base: "1", md: "2" }}>
          {movie?.release_date ? (
            <>
              <Text fontSize={{ base: "xs", md: "initial" }}>
                {movie?.release_date?.slice(0, 4)}
              </Text>
              <Text fontSize={{ base: "xs", md: "initial" }}>•</Text>
              <Text fontSize={{ base: "xs", md: "initial" }}>
                {(movie?.runtime / 60).toFixed(1)} Hours
              </Text>
            </>
          ) : (
            <Text fontSize={{ base: "xs", md: "initial" }}>Upcoming</Text>
          )}
          <Text fontSize={{ base: "xs", md: "initial" }}>•</Text>
          <Text fontSize={{ base: "xs", md: "initial" }}>
            {genres?.join(", ")}
          </Text>
        </HStack>
        <Box>
          <Text>{movie?.overview}</Text>
        </Box>
        <Button
          _hover={{ bgColor: "brand.500", textColor: "white" }}
          _active={{ bgColor: "brand.hover" }}
          bgColor="brand.100"
          rounded={{ base: "base", md: "md" }}
          display={{ base: "flex", md: "none" }}
          size={{ base: "md", md: "lg" }}
          alignItems="center"
        >
          Add To Watchlist
        </Button>
      </VStack>
    </VStack>
  );
};

export default MovieInfo;
