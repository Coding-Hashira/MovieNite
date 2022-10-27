import {
  Box,
  Heading,
  Img,
  VStack,
  StackDivider,
  HStack,
  CircularProgress,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { formatDate, numFormat } from "../../utils";

const MovieInfo = ({ movie }) => {
  console.log(movie);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    console.log(genres);
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
      {isLoading ? (
        <CircularProgress isIndeterminate />
      ) : (
        <VStack alignItems="flex-start" w="80%" spacing="3">
          <HStack spacing="8px" alignItems="flex-end">
            <Heading size="lg" lineHeight="1" fontFamily="body">
              {movie?.title}
            </Heading>
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
      )}
    </VStack>
  );
};

export default MovieInfo;
