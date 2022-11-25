import { Box, CircularProgress, VStack } from "@chakra-ui/react";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Global";

const Cast = lazy(() => import("../components/Movie/Cast"));
const MovieInfo = lazy(() => import("../components/Movie/MovieInfo"));
const Trailer = lazy(() => import("../components/Movie/Trailer"));
const Reviews = lazy(() => import("../components/Movie/Reviews"));

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
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
  }, []);

  return (
    <Box bgColor="blackAlpha.900" minH="100vh" className="scroll">
      <Suspense
        fallback={
          <Box
            w="95vw"
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress isIndeterminate color="brand.100" />
          </Box>
        }
      >
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
            <MovieInfo movie={movie} />
          </VStack>
          <Trailer title={movie?.title} />
          <Cast id={id} />
          <Reviews
            id={id}
            rating={movie?.vote_average}
            ratingCount={movie?.vote_count}
          />
        </VStack>
      </Suspense>
    </Box>
  );
};

export default Movie;
