import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MovieBanner = ({ movieImg, color }) => {
  const [bnrcolor, setBnrcolor] = useState();

  useEffect(() => {
    setBnrcolor(color);
    console.log(color);
  }, [color]);
  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      height="66vh"
      display={window?.innerWidth > 768 ? "block" : "none"}
      background={bnrcolor}
    ></Box>
  );
};

export default MovieBanner;
