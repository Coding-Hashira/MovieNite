import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Banner, Row } from "../components";

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState({});
  const [genreList, setGenreList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

        let genres = allGenres.filter((genreObj) =>
          genreIds?.includes(genreObj.id)
        );
        genres.forEach((genre) => movieGenres.push(genre.name));

        setGenreList(movieGenres);
        setIsLoading(false);
      });
  }, [trendingMovie]);

  return (
    <Box bgColor="blackAlpha.900">
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          h="100vh"
          w="100vw"
          bg="blackAlpha.900"
          justifyContent="center"
        >
          <CircularProgress color="brand.500" isIndeterminate />
        </Box>
      ) : (
        <Box>
          <Banner
            movieTitle={trendingMovie?.title}
            movieImg={trendingMovie?.backdrop_path}
            movieDesc={trendingMovie?.overview}
            movieRating={trendingMovie?.vote_average}
            movieRatingCount={trendingMovie?.vote_count}
            movieGenres={genreList}
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
          <Row genreId="28" genre="Action" allGenres={allGenres} />
          <Row genreId="12" genre="Adventure" allGenres={allGenres} />
          <Row genreId="35" genre="Comedy" allGenres={allGenres} />
          <Row genreId="27" genre="Horror" allGenres={allGenres} />
          <Row genreId="10749" genre="Romance" allGenres={allGenres} />
          <Row genreId="878" genre="Sci-fi" allGenres={allGenres} />
          <Row genreId="53" genre="Thriller" allGenres={allGenres} />
          <Row genreId="10751" genre="Family" allGenres={allGenres} />
          <Row genreId="16" genre="Animation" allGenres={allGenres} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
