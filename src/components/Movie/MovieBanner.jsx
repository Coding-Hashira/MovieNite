import { Box } from "@chakra-ui/react";
import React from "react";

const MovieBanner = ({ movieImg }) => {
  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      height="66vh"
      display={window?.innerWidth > 768 ? "block" : "none"}
      backgroundImage={`url("https://image.tmdb.org/t/p/original${movieImg}")`}
    ></Box>
  );
};

export default MovieBanner;
