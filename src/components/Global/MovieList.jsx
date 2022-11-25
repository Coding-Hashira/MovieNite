import { Box, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./";
import { Poster } from "../Home";

const MovieList = ({
  movies,
  page,
  setPage,
  totalPages,
  hasPagination = true,
  onPageChange,
}) => {
  const [allGenres, setAllGenres] = useState([]);

  const getNextPage = (pageParam) => {
    let page = pageParam < 500 ? pageParam + 1 : 1;
    setPage(page);
  };

  const getPrevPage = (pageParam) => {
    let page = pageParam > 1 ? pageParam - 1 : totalPages;
    setPage(page);
  };

  useEffect(() => {
    if (onPageChange) {
      onPageChange();
    }
  }, [page]);

  useEffect(() => {
    const fetchGenres = () => {
      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US"
      )
        .then((res) => res.json())
        .then((json) => {
          setAllGenres(json?.genres);
        });
    };

    fetchGenres();
  }, []);

  return (
    <Box w="100%" bg="transparent" minH="100vh">
      <VStack spacing="8" w="100%" alignItems="start">
        <Box
          display="flex"
          w="100%"
          flexWrap="wrap"
          rowGap="80px"
          columnGap="50px"
          justifyContent="center"
        >
          {movies?.map((movie, key) =>
            window?.innerWidth > 768 ? (
              <Poster
                movie={movie}
                hasIcon={true}
                key={key}
                allGenres={allGenres}
              />
            ) : (
              <Link key={key} to={`/movie/${movie?.id}`}>
                <Poster movie={movie} hasIcon={true} allGenres={allGenres} />
              </Link>
            )
          )}
        </Box>
        {hasPagination & movies && (
          <Pagination
            getNextPage={getNextPage}
            getPrevPage={getPrevPage}
            page={page}
            totalPages={totalPages}
          />
        )}
      </VStack>
    </Box>
  );
};

export default MovieList;
