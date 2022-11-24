import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TagButton from "./TagButton";

const GenreDiscover = ({ genre, setGenre }) => {
  const [allGenres, setAllGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchGenres = async () => {
      await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US"
      )
        .then((res) => res.json())
        .then((json) => {
          setAllGenres(json?.genres);

          setIsLoading(false);
        });
    };

    fetchGenres();
  }, []);

  return (
    <Box
      w="100%"
      display="flex"
      flexWrap="wrap"
      justifyContent={{ base: "center", md: "space-between" }}
    >
      {isLoading ? (
        <CircularProgress color="brand.100" isIndeterminate />
      ) : (
        allGenres?.map((genreMap, key) => (
          <TagButton
            genre={genre}
            genreId={genreMap?.id}
            setGenre={setGenre}
            text={genreMap?.name}
            key={key}
          />
        ))
      )}
    </Box>
  );
};

export default GenreDiscover;
