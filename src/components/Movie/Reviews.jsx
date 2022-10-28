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
import Review from "./Review";

const Reviews = ({ reviews }) => {
  const [reviewList, setReviewList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setReviewList(reviews);
  }, [reviews]);

  return (
    <VStack gap="2" alignItems="normal">
      <Heading>Ratings & Reviews</Heading>
      <Divider m="0px !important" />
      <VStack
        spacing="5"
        divider={<StackDivider borderColor="grey" />}
        alignItems="flex-start"
      >
        {reviewList?.map((review, key) => (
          <Review review={review} key={key} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Reviews;
