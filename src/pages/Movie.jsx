import { Box, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast, MovieBanner, MovieInfo } from "../components/Movie";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCast(json?.cast);
      });
  }, []);

  return (
    <Box bgColor="blackAlpha.900" className="scroll">
      <MovieBanner movieImg={movie?.backdrop_path} />
      <VStack
        px="100px"
        alignItems="normal"
        position="relative"
        spacing="80px"
        bottom="140px"
      >
        <MovieInfo movie={movie} />
        <Cast cast={cast} />
      </VStack>
    </Box>
  );
};

export default Movie;
