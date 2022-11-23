import { Box, CircularProgress, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast, MovieInfo, Reviews } from "../components/Movie";
import Trailer from "../components/Movie/Trailer";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [color, setColor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovie(json);
        });
    };

    fetchMovie();
    setIsLoading(false);
  }, []);

  return (
    <Box bgColor="blackAlpha.900" minH="100vh" className="scroll">
      {isLoading ? (
        <Box
          w="100vw"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress isIndeterminate color="brand.100" />
        </Box>
      ) : (
        <>
          <VStack
            px={{ base: "20px", md: "100px" }}
            alignItems="normal"
            spacing={{ base: "50px", md: "80px" }}
            pt="100px"
          >
            <MovieInfo
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              movie={movie}
            />
            <Trailer title={movie?.title} />
            <Cast setIsLoading={setIsLoading} id={id} />
            <Reviews
              setIsLoading={setIsLoading}
              id={id}
              rating={movie?.vote_average}
              ratingCount={movie?.vote_count}
              isLoading={isLoading}
            />
          </VStack>
        </>
      )}
    </Box>
  );
};

export default Movie;
