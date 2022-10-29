import {
  Avatar,
  Button,
  Divider,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Review from "./Review";

const Reviews = ({ reviews, rating, ratingCount, isLoading }) => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    setReviewList(reviews);
  }, [reviews]);

  return (
    <VStack gap="2" alignItems="normal">
      <VStack alignItems="flex-start" spacing={{ base: "50px", md: "80px" }}>
        <Rating
          isLoading={isLoading}
          rating={rating}
          ratingCount={ratingCount}
        />
        <VStack
          spacing={{ base: "3", md: "5" }}
          divider={<StackDivider color="gray.400" />}
          alignItems="flex-start"
          w="100%"
        >
          <Heading fontFamily="body">
            {reviewList.length > 1 ? "Reviews" : "Review"}
          </Heading>
          {reviewList.length > 0 ? (
            reviewList?.map((review, key) => (
              <Review review={review} key={key} />
            ))
          ) : (
            <Text
              display="flex"
              textColor="gray.400"
              fontSize="xl"
              fontStyle="italic"
              justifyContent="center"
              w="100%"
            >
              No Reviews Yet
            </Text>
          )}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Reviews;
