import {
  VStack,
  useDisclosure,
  IconButton,
  HStack,
  Heading,
  Tooltip,
  CircularProgress,
} from "@chakra-ui/react";
import React from "react";
import { Suspense } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { FilterModal } from "../components/Discover";
import { Breadcrumb } from "../components/Global";

const Discover = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      minH="100vh"
      spacing={{ base: "10", md: "16" }}
      bg="blackAlpha.900"
      pt={{ base: "20", md: "24" }}
      alignItems="start"
      px="10"
    >
      <VStack spacing="5" alignItems="start" w="full">
        <Breadcrumb
          pages={[
            { title: "Home", link: "/" },
            { title: "Discover", link: "/discover" },
          ]}
        />
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
              _focusVisible={{ boxShadow: "none" }}
            />
          </Tooltip>
        </HStack>
      </VStack>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Suspense
        fallback={<CircularProgress isIndeterminate color="brand.100" />}
      >
        <Outlet />
      </Suspense>
    </VStack>
  );
};

export default Discover;
