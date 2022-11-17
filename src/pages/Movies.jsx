import { Box, CircularProgress, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "../components/Global";
import { Poster } from "../components/Home";

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [allGenres, setAllGenres] = useState([]);

  const getNextPage = (pageParam) => {
    let page = pageParam < 500 ? pageParam + 1 : 1;
    setPage(page);
  };

  const getPrevPage = (pageParam) => {
    let page = pageParam > 1 ? pageParam - 1 : totalPage;
    setPage(page);
  };

  useEffect(() => {
    setIsLoading(true);

    let idParam = searchParams?.get("id");
    const fetchMovies = async (pageNo, id) => {
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_genres=${
          id ? id : ""
        }&with_watch_monetization_types=flatrate`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovies(json?.results);
          setPage(json?.page);
          setTotalPage(json?.total_pages > 500 ? 500 : json?.total_pages);
          console.log(json);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    fetchMovies(page, idParam);
  }, [page, searchParams]);

  useEffect(() => {
    setIsLoading(true);

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
    setIsLoading(false);
  }, []);

  return (
    <Box paddingTop="" w="100%" bg="transparent" minH="100vh">
      <VStack spacing="8" w="100%" alignItems="start">
        {isLoading ? (
          <Box
            w="100%"
            h="60vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress isIndeterminate color="brand.100" />
          </Box>
        ) : (
          <>
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
                    hasIcon={false}
                    key={key}
                    allGenres={allGenres}
                  />
                ) : (
                  <Link key={key} to={`/movie/${movie?.id}`}>
                    <Poster
                      movie={movie}
                      hasIcon={true}
                      allGenres={allGenres}
                    />
                  </Link>
                )
              )}
            </Box>
          </>
        )}
        <Pagination
          page={page}
          getNextPage={getNextPage}
          changePage={setPage}
          getPrevPage={getPrevPage}
          totalPages={totalPage}
        />
      </VStack>
    </Box>
  );
};

export default Movies;
