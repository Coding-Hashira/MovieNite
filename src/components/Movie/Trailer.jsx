import {
  Box,
  Heading,
  VStack,
  StackDivider,
  HStack,
  Text,
} from "@chakra-ui/react";
import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const Trailer = ({ title }) => {
  const [localTitle, setLocalTitle] = useState("");
  const [clips, setClips] = useState([]);

  useEffect(() => {
    setLocalTitle(title ? title : "");
  }, [title]);

  useEffect(() => {
    if (localTitle) {
      movieTrailer(localTitle, { multi: true }).then((res) => {
        setClips(res?.length > 5 ? res?.slice(0, 5) : res);
        console.log(clips, res);
      });
    }
  }, [localTitle]);

  return (
    <VStack
      divider={<StackDivider borderColor="gray.400" />}
      alignItems="flex-start"
      w="100%"
    >
      <Heading fontFamily="body">Trailers & Clips</Heading>
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
        {clips?.length > 0 ? (
          clips?.map((url) => (
            <Box
              minW={{ base: "360px", md: "480px" }}
              minH={{ base: "202px", md: "270px" }}
            >
              <ReactPlayer
                config={{
                  youtube: {
                    playerVars: { origin: "http://localhost:5173" },
                  },
                }}
                height={window?.innerWidth > 768 ? 270 : 202}
                width={window?.innerWidth > 768 ? 480 : 360}
                url={url}
                controls={window?.innerWidth > 768}
              />
            </Box>
          ))
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
              No Clips Available
            </Text>
          </VStack>
        )}
      </HStack>
    </VStack>
  );
};

export default Trailer;
