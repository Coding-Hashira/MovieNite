import { Box, CircularProgress, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Global";
import { Cast, MovieInfo, Reviews, Trailer } from "../components/Movie";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
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
            <VStack spacing="10" pt="5" alignItems="start">
              <Breadcrumb
                pages={[
                  { title: "Home", link: "/" },
                  { title: movie?.title, link: document?.location?.pathname },
                ]}
              />
              <MovieInfo
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                movie={movie}
              />
            </VStack>
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
