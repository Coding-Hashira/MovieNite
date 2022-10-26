import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieBanner, MovieInfo } from "../components/Movie";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

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

  return (
    <Box bgColor="blackAlpha.900" className="scroll">
      <MovieBanner movieImg={movie?.backdrop_path} />
      <MovieInfo movie={movie} />
    </Box>
  );
};

export default Movie;
