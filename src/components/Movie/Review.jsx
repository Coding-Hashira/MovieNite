import React, { useEffect, useState } from "react";
import {
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { formatDate } from "../../utils";

const Review = ({ review, key }) => {
  const [show, setShow] = useState(false);

  return (
    <HStack fontFamily="body" alignItems="flex-start" key={key} spacing="2">
      <Avatar
        src={
          review?.author_details?.avatar_path
            ? `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`
            : ""
        }
      />
      <VStack spacing="3.5" alignItems="flex-start">
        <VStack lineHeight="1" alignItems="flex-start" spacing="1">
          <Heading fontSize="md">{review?.author}</Heading>
          <Text textColor="gray.300" fontSize="xs">
            @{review?.author_details?.username}
          </Text>
        </VStack>
        <VStack alignItems="flex-start" spacing="0.5">
          <Text noOfLines={show ? "100" : "2"} fontSize="sm">
            {review?.content
              ?.replace(new RegExp(/\x2a/g), "")
              .replace(new RegExp(/_/g), "")
              .replace(new RegExp(/@/g), "")
              .replace(new RegExp(/(?:https?|ftp):\/\/[\n\S]+/g), "")}
          </Text>
          <HStack justifyContent="space-between" w="100%">
            <Button
              onClick={() => {
                setShow(show ? false : true);
              }}
              variant="link"
              fontSize="sm"
              fontWeight="normal"
              _focusVisible={{ boxShadow: "none" }}
              color="gray.400"
            >
              {show ? "Read Less" : "Read More"}
            </Button>
            <Text textColor="gray.300" alignSelf="flex-end" fontSize="xs">
              {formatDate(review?.created_at)}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Review;
