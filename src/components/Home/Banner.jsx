import {
  Box,
  Heading,
  HStack,
  StackDivider,
  VStack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Banner = ({
  movieTitle,
  movieImg,
  movieGenres,
  movieDesc,
  movieRelease,
  movieId,
}) => {
  return (
    <Box
      position="relative"
      zIndex="banner"
      bgSize="cover"
      bgPosition={{ base: "top", md: "center" }}
      overflowX="hidden"
      bgAttachment={{ base: "fixed", md: "initial" }}
      bgRepeat="no-repeat"
      height={{ base: "140vh", md: "120vh" }}
      paddingLeft={{ base: "0", md: "12", lg: "24" }}
      backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.52), rgba(0,0,0,0.35)), url("https://image.tmdb.org/t/p/original${movieImg}")`}
    >
      <Box
        position="absolute"
        px={{ base: "5", md: "0" }}
        top="35%"
        width={{ base: "100%", md: "2xl" }}
      >
        <VStack spacing={{ base: "3", md: "5" }} alignItems="flex-start">
          <VStack spacing="2px">
            <Heading>{movieTitle?.toUpperCase()}</Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} alignSelf="flex-start">
              ({movieRelease?.slice(0, 4)})
            </Text>
          </VStack>
          <HStack spacing="2" divider={<StackDivider />}>
            {movieGenres.map((genre, key) => (
              <Link
                href={`/movie?genre=${genre?.id}`}
                fontFamily="body"
                _hover={{ textColor: "brand.100", textDecor: "underline" }}
                fontSize="md"
                key={key}
              >
                {genre?.name}
              </Link>
            ))}
          </HStack>
          <Text width={{ base: "100%", md: "md" }} noOfLines="5">
            {movieDesc}
          </Text>
        </VStack>
        <Box paddingY="5">
          <RouterLink to={`/movie/${movieId}`}>
            <Button
              _hover={{ bgColor: "brand.hover", textColor: "white" }}
              _active={{ bgColor: "brand.hover" }}
              bgColor="brand.900"
              rounded={{ base: "sm", md: "md" }}
              display="flex"
              alignItems="center"
            >
              Know More
            </Button>
          </RouterLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
