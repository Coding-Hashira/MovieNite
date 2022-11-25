import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect, Suspense, lazy } from "react";

const Banner = lazy(() => import("../components/Home/Banner"));
const Row = lazy(() => import("../components/Home/Row"));

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState({});
  const [genreList, setGenreList] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  // Fetch Banner Movie
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((json) => {
        setTrendingMovie(json.results[Math.floor(Math.random() * 20)]);
      });
  }, []);

  // Fetch Genres for Banner Movie
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US"
    )
      .then((res) => res.json())
      .then((json) => {
        let genreIds = trendingMovie?.genre_ids;
        let movieGenres = [];

        setAllGenres(json?.genres);

        // making the array of genre of banner movie
        let genres = allGenres.filter((genreObj) =>
          genreIds?.includes(genreObj.id)
        );
        genres.forEach((genre) => movieGenres.push(genre));

        setGenreList(movieGenres);
      });
  }, [trendingMovie]);

  return (
    <Box minH="100vh" bgColor="blackAlpha.900">
      <Suspense
        fallback={
          <Box h="full" w="95vw" pt="200px" display="flex" alignItems="center">
            <CircularProgress isIndeterminate color="brand.100" />
          </Box>
        }
      >
        <Banner
          movieTitle={trendingMovie?.title}
          movieId={trendingMovie?.id}
          movieImg={
            window?.innerWidth < 768
              ? trendingMovie?.poster_path
              : trendingMovie?.backdrop_path
          }
          movieDesc={trendingMovie?.overview}
          movieRating={trendingMovie?.vote_average}
          movieRatingCount={trendingMovie?.vote_count}
          movieGenres={
            genreList?.length >= 3 ? genreList?.slice(0, 3) : genreList
          }
          movieRelease={trendingMovie?.release_date}
        />
        <Box
          width="100%"
          height="150px"
          position="relative"
          bottom="150px"
          zIndex="1250"
          overflowX="hidden"
          bgImage="linear-gradient(transparent, rgb(20,20,20))"
        />
        <Row
          withGenre={false}
          heading="Trending Now"
          allGenres={allGenres}
          url="https://api.themoviedb.org/3/movie/popular?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&page=1"
        />
        <Row
          genreId="28"
          withGenre={true}
          heading="Top in Action"
          allGenres={allGenres}
        />
        <Row
          genreId="12"
          withGenre={true}
          heading="Top in Adventure"
          allGenres={allGenres}
        />
        <Row
          genreId="35"
          withGenre={true}
          heading="Top in Comedy"
          allGenres={allGenres}
        />
        <Row
          genreId="27"
          withGenre={true}
          heading="Top in Horror"
          allGenres={allGenres}
        />
        <Row
          genreId="10749"
          withGenre={true}
          heading="Top in Romance"
          allGenres={allGenres}
        />
        <Row
          genreId="878"
          withGenre={true}
          heading="Top in Sci-fi"
          allGenres={allGenres}
        />
        <Row
          genreId="53"
          withGenre={true}
          heading="Top in Thriller"
          allGenres={allGenres}
        />
        <Row
          genreId="10751"
          withGenre={true}
          heading="Top in Family"
          allGenres={allGenres}
        />
        <Row
          genreId="16"
          withGenre={true}
          heading="Top in Animation"
          allGenres={allGenres}
        />
      </Suspense>
    </Box>
  );
};

export default Home;
