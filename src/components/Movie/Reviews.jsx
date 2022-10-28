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
      <VStack spacing="80px">
        <Rating
          isLoading={isLoading}
          rating={rating}
          ratingCount={ratingCount}
        />
        <VStack
          spacing="5"
          divider={<StackDivider color="gray.400" />}
          alignItems="flex-start"
        >
          <Heading fontFamily="body">
            {reviewList.length > 1 ? "Reviews" : "Review"}
          </Heading>
          {reviewList?.map((review, key) => (
            <Review review={review} key={key} />
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Reviews;
