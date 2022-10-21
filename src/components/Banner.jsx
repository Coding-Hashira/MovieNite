import {
  Box,
  Heading,
  HStack,
  StackDivider,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { numFormat } from "../utils";
import { AiFillStar } from "react-icons/ai";

const Banner = ({
  movieTitle,
  movieImg,
  movieGenres,
  movieDesc,
  movieRating,
  movieRatingCount,
  movieRelease,
}) => {
  return (
    <Box
      position="relative"
      zIndex="banner"
      bgSize="cover"
      overflowX="hidden"
      bgRepeat="no-repeat"
      height="105vh"
      paddingLeft="24"
      backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.92)), url("https://image.tmdb.org/t/p/original${movieImg}")`}
    >
      <Box position="absolute" top="35%">
        <VStack spacing="5" alignItems="flex-start">
          <HStack display="flex">
            <Heading>{movieTitle?.toUpperCase()}</Heading>
            <Text fontSize="xs" alignSelf="flex-end">
              ({movieRelease?.slice(0, 4)})
            </Text>
          </HStack>
          <HStack spacing="2" divider={<StackDivider />}>
            {movieGenres.map((genre, key) => (
              <a
                href="#"
                style={{
                  fontFamily: "Poppins",
                }}
                className="Link"
                key={key}
              >
                {genre}
              </a>
            ))}
          </HStack>
          <HStack _hover={{ cursor: "default" }} alignItems="center">
            <AiFillStar
              style={{ color: "#FDCC0D", height: "20px", width: "20px" }}
            />
            <Text>{movieRating?.toString()}</Text>
            <Text>({numFormat(movieRatingCount)}+)</Text>
          </HStack>
        </VStack>
        <Box paddingY="5">
          <Button
            _hover={{ bgColor: "brand.hover", textColor: "white" }}
            _active={{ bgColor: "brand.hover" }}
            bgColor="brand.900"
            rounded="md"
            display="flex"
            alignItems="center"
          >
            Add To Watchlist
          </Button>
        </Box>
        <Box>
          <Text width="sm" noOfLines="5">
            {movieDesc}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
