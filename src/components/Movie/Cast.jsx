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

const Cast = ({ cast }) => {
  const [castLocal, setCastLocal] = useState([]);

  useEffect(() => {
    setCastLocal(cast ? cast : []);
  }, [cast]);

  return (
    <HStack flexDirection="column" gap="2" alignItems="normal">
      <Heading>Cast</Heading>
      <Divider m="0px !important" />
      <HStack
        spacing="12"
        maxW="100%"
        overflowX="scroll"
        maxH="300px"
        alignItems="flex-start"
        className="scroll-none"
      >
        {castLocal?.map((person) => (
          <VStack
            alignItems="center"
            justifyContent="space-between"
            textAlign="center"
          >
            <Avatar
              // size="2xl"
              h="175px"
              w="175px"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.5s"
              cursor="pointer"
              src={
                person?.profile_path
                  ? `https://image.tmdb.org/t/p/original${person?.profile_path}`
                  : ""
              }
            />
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
