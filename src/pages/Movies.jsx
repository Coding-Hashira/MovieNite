import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/Global/MovieList";

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

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
          setTotalPages(json?.total_pages > 500 ? 500 : json?.total_pages);
          console.log(json);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    fetchMovies(page, idParam);
  }, [page, searchParams]);

  return (
    <MovieList
      totalPages={totalPages}
      movies={movies}
      page={page}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      setPage={setPage}
    />
  );
};

export default Movies;
