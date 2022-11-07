import { Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Review from "./Review";

const Reviews = ({ id, isLoading, setIsLoading, rating, ratingCount }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json?.results);
          setReviews(json?.results);
        });
    };

    fetchReviews();
    setIsLoading(false);

    console.log(reviews, rating);
  }, []);

  return (
    <VStack gap="2" alignItems="normal">
      <VStack alignItems="flex-start" spacing={{ base: "50px", md: "80px" }}>
        <Rating rating={rating?.toFixed(1) * 10} ratingCount={ratingCount} />
        <VStack
          spacing={{ base: "3", md: "5" }}
          divider={<StackDivider color="gray.400" />}
          alignItems="flex-start"
          w="100%"
        >
          <Heading fontFamily="body">
            {reviews?.length > 1 ? "Reviews" : "Review"}
          </Heading>
          {reviews?.length > 0 ? (
            reviews?.map((review, key) => <Review review={review} key={key} />)
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
