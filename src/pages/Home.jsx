import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Banner } from "../components";

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState({});
  const [genreList, setGenreList] = useState([]);

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
        let allGenres = json?.genres;
        let movieGenres = [];
        let genres = allGenres.filter((genreObj) =>
          genreIds?.includes(genreObj.id)
        );
        genres.forEach((genre) => movieGenres.push(genre.name));
        setGenreList(movieGenres);
      });
  }, [trendingMovie]);

  return (
    <Box>
      <Banner
        movieTitle={trendingMovie?.title}
        movieImg={trendingMovie?.backdrop_path}
        movieDesc={trendingMovie?.overview}
        movieRating={trendingMovie?.vote_average}
        movieRatingCount={trendingMovie?.vote_count}
        movieGenres={genreList}
      />
    </Box>
  );
};

export default Home;
