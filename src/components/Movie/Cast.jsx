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

const Cast = ({ cast, isLoading }) => {
  const [castLocal, setCastLocal] = useState([]);

  useEffect(() => {
    isLoading ? "" : setCastLocal(cast);
  }, [isLoading]);

  return (
    <HStack flexDirection="column" gap="2" alignItems="normal">
      <Heading fontFamily="body">Cast</Heading>
      <Divider m="0px !important" />
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
        {castLocal?.map((person) => (
          <VStack
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
                // size="2xl"
                h={{ base: "100px", md: "175px" }}
                w={{ base: "100px", md: "175px" }}
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.5s"
                cursor="pointer"
                src={
                  person?.profile_path
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
