import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Cast = ({ id, setIsLoading }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US`
      )
        .then((res) => res.json())
        .then((json) => {
          setCast(json?.cast);
        });
    };

    fetchCast();
    setIsLoading(false);
  }, []);

  return (
    <HStack flexDirection="column" gap="2" alignItems="normal">
      <Heading fontFamily="body">Cast</Heading>
      <Divider />
      <HStack
        spacing={{ base: "8", md: "12" }}
        maxW="100%"
        overflowX="scroll"
        maxH="300px"
        alignItems="flex-start"
        className="scroll-none"
        pl="3px"
        m="0px"
      >
        {cast?.map((person, key) => (
          <VStack
            key={key}
            alignItems="center"
            justifyContent="space-between"
            textAlign="center"
            spacing="0.5"
          >
            <Box
              h={{ base: "125px", md: "200px" }}
              alignItems="center"
              display="flex"
            >
              <Avatar
                h={{ base: "100px", md: "175px" }}
                w={{ base: "100px", md: "175px" }}
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.5s"
                cursor="pointer"
                src={
                  (person?.profile_path != null) | undefined
                    ? `https://image.tmdb.org/t/p/original${person?.profile_path}`
                    : ""
                }
              />
            </Box>
            <Text fontWeight="extrabold" textColor="brand.100" fontSize="md">
              {person?.name}
            </Text>
            <Text fontWeight="medium" textColor="gray.400" fontSize="xs">
              {person?.character}
            </Text>
          </VStack>
        ))}
      </HStack>
    </HStack>
  );
};

export default Cast;
