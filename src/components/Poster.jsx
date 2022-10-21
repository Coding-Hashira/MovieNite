import { Box, HStack, IconButton, useDisclosure } from "@chakra-ui/react";

import React, {  useState } from "react";
import { AiOutlineInfo, AiOutlinePlus } from "react-icons/ai";
import InfoModal from "./InfoModal";

const Poster = ({ movie, allGenres }) => {
  const [iconVisibility, setIconVisibility] = useState("hidden");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)",
        bgImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
      }}
      style={{ minHeight: "250px" }}
      transition="all"
      minWidth="167px"
      bgSize="contain"
      bgRepeat="no-repeat"
      transitionDuration="0.5s"
      justifyContent="center"
      alignItems="center"
      display="flex"
      spacing="5px"
      onMouseLeave={() => setIconVisibility("hidden")}
      onMouseEnter={() => setIconVisibility("visible")}
      bgImage={`url(https://image.tmdb.org/t/p/original${movie?.poster_path})`}
    >
      <IconButton
        icon={<AiOutlineInfo />}
        _hover={{ bgColor: "brand.hover", textColor: "white" }}
        _active={{ bgColor: "brand.900" }}
        bgColor="brand.500"
        size="lg"
        minWidth="35px"
        visibility={iconVisibility}
        height="35px"
        padding="0px"
        rounded="full"
        onClick={() => {
          onOpen();
          setIconVisibility("hidden");
        }}
      />
      <InfoModal
        allGenres={allGenres}
        isOpen={isOpen}
        onClose={onClose}
        movie={movie}
      />
      <IconButton
        icon={<AiOutlinePlus />}
        _hover={{ bgColor: "brand.hover", textColor: "white" }}
        _active={{ bgColor: "brand.900" }}
        bgColor="brand.500"
        size="lg"
        minWidth="35px"
        visibility={iconVisibility}
        height="35px"
        padding="0px"
        rounded="full"
      />
    </HStack>
  );
};

export default Poster;
