import { Box } from "@chakra-ui/react";
import React from "react";

const MovieBanner = ({ movieImg, color }) => {
  let bgCol =
    movieImg != null
      ? `url("https://image.tmdb.org/t/p/original${movieImg}")`
      : color;

  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      height="66vh"
      display={window?.innerWidth > 768 ? "block" : "none"}
      background={bgCol}
    ></Box>
  );
};

export default MovieBanner;
