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
      }}
      colorScheme="whiteAlpha"
    >
      {text}
    </Button>
  );
};

export default TagButton;
