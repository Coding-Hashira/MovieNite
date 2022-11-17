import React from "react";
import { Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Logo = ({ display, onClick }) => {
  return (
    <Link
      as={RouterLink}
      onClick={onClick}
      display={display}
      to="/"
      _hover={{ textDecoration: "none" }}
    >
      <Heading
        size={{ base: "3xl", md: "2xl" }}
        fontFamily="Bebas Neue"
        textColor="brand.500"
      >
        MovieNite
      </Heading>
    </Link>
  );
};

export default Logo;
