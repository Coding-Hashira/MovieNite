import {
  VStack,
  Button,
  useDisclosure,
  IconButton,
  HStack,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import FilterModal from "../components/Discover/FilterModal";

const Discover = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      minH="100vh"
      spacing={{ base: "10", md: "20" }}
      bg="blackAlpha.900"
      pt={{ base: "20", md: "24" }}
      alignItems="start"
      px="10"
    >
      <HStack justifyContent="space-between" w="full">
        <Heading>Discover</Heading>
        <Tooltip label="Filter" borderRadius="md">
          <IconButton
            _hover={{ bgColor: "brand.hover", textColor: "white" }}
            _active={{ bgColor: "brand.hover" }}
            bgColor="brand.900"
            rounded="md"
            onClick={onOpen}
            icon={<AiOutlineFilter />}
          />
        </Tooltip>
      </HStack>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Outlet />
    </VStack>
  );
};

export default Discover;
