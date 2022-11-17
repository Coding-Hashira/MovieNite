import { Box, Button, CircularProgress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const TagButton = ({ text, key, genre, setGenre, genreId }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(genre == genreId);
  }, [genre]);

  return (
    <Button
      textColor="white"
      variant={active ? "solid" : "ghost"}
      _hover={
        active
          ? { bgColor: "brand.hover", textColor: "white" }
          : { bgColor: "whiteAlpha.50" }
      }
      _active={
        active ? { bgColor: "brand.hover" } : { bgColor: "whiteAlpha.100" }
      }
      _focusVisible={{ boxShadow: "none" }}
      transition="all 0.3s"
      bgColor={active ? "brand.900" : ""}
      key={key}
      fontWeight="medium"
      onClick={() => {
        if (genre != genreId) {
          setGenre(genreId);
        } else if (genre === genreId) {
          setGenre("");
        }

        console.log(text);
      }}
      colorScheme="whiteAlpha"
    >
      {text}
    </Button>
  );
};

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
