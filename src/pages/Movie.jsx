import { Box, CircularProgress, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast, MovieBanner, MovieInfo, Reviews } from "../components/Movie";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setCast(json?.cast);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setReviews(json?.results);
      });
  }, []);

  console.log(reviews);
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
          <MovieBanner movieImg={movie?.backdrop_path} />
          <VStack
            px="100px"
            alignItems="normal"
            position="relative"
            spacing="80px"
            bottom="140px"
          >
            <MovieInfo
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              movie={movie}
            />
            <Cast cast={cast} isLoading={isLoading} />
            <Reviews
              reviews={reviews}
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
