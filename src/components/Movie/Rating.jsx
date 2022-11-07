import { Box, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { numFormat } from "../../utils";

const Rating = ({ rating, ratingCount }) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.400" />}
      alignItems="flex-start"
      w="100%"
    >
      <Heading fontFamily="body">Ratings</Heading>
      <Box w="100%" display="flex" alignItems="flex-end">
        {ratingCount > 0 ? (
          <>
            <Heading textColor="brand.100" size="3xl">
              {rating}%
            </Heading>
            <Text alignItems="flex-end" fontSize="xs" textColor="gray.400">
              ({numFormat(ratingCount)}+)
            </Text>
          </>
        ) : (
          <VStack w="100%">
            <Text
              display="flex"
              textColor="gray.400"
              fontSize="xl"
              fontStyle="italic"
              justifyContent="center"
              w="100%"
            >
              No Ratings Yet
            </Text>
          </VStack>
        )}
      </Box>
    </VStack>
  );
};

export default Rating;
