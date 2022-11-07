import { Box, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { numFormat } from "../../utils";

const Rating = ({ rating, ratingCount, isLoading }) => {
  const [score, setScore] = useState("");

  useEffect(() => {
    if (isLoading === false) {
      setScore(`${rating.toFixed(1) * 10}%`);
    } else {
      ("");
    }
  }, [isLoading]);

  return (
    <VStack
      divider={<StackDivider borderColor="gray.400" />}
      alignItems="flex-start"
      w="100%"
    >
      <Heading fontFamily="body">Ratings</Heading>
      <Box display="flex" alignItems="flex-end">
        <Heading textColor="brand.100" size="3xl">
          {score}
        </Heading>
        <Text alignItems="flex-end" fontSize="xs" textColor="gray.400">
          ({numFormat(ratingCount)}+)
        </Text>
      </Box>
    </VStack>
  );
};

export default Rating;
