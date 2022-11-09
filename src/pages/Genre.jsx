import { Box, CircularProgress, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "../components/Global/Pagination";
import { Poster } from "../components/Home";

const Genre = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState("");
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
    const fetchMovies = async (pageNo) => {
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_genres=${id}&with_watch_monetization_types=flatrate`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovies(json?.results);
          setPage(json?.page);
          setTotalPage(json?.total_pages > 500 ? 500 : json?.total_pages);
        });
      setIsLoading(false);
    };

    fetchMovies(page);
  }, [page]);
  useEffect(() => {
    setIsLoading(true);

    const fetchGenres = async () => {
      await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US"
      )
        .then((res) => res.json())
        .then((json) => {
          let allGenres = json?.genres;

          let genres = allGenres?.filter((genreObj) => id == genreObj?.id);
          setGenre(genres[0]?.name);

          setAllGenres(allGenres);
        });
    };

    fetchGenres();
  }, []);

  return (
    <Box paddingTop="" bg="blackAlpha.900" pt="24" px="10" minH="100vh">
      <VStack spacing="8" alignItems="start">
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
            <Heading size="lg">BEST IN {genre?.toUpperCase()}</Heading>
            <Box
              display="flex"
              w="100%"
              flexWrap="wrap"
              rowGap="80px"
              columnGap="50px"
              justifyContent="center"
            >
              {movies?.map((movie, key) =>
                window?.innerWidth < 768 ? (
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

export default Genre;
