import {
  Box,
  Heading,
  HStack,
  IconButton,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { BiNavigation, BiSearch } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import { AiOutlineFire } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box
      px="10"
      bg="transparent"
      position="fixed"
      width="100vw"
      zIndex="modal"
      display="flex"
      justifyContent="space-between"
      py="6"
    >
      <Box>
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <Heading size="2xl" fontFamily="Bebas Neue" textColor="brand.500">
            MovieNite
          </Heading>
        </Link>
      </Box>

      <HStack display="flex" spacing="4">
        {/* TODO: Add React Router Link */}
        <Tooltip label="Discover" borderRadius="md" placement="auto">
          <IconButton
            _hover={{ bgColor: "brand.500", textColor: "white" }}
            _active={{ bgColor: "brand.900" }}
            variant="ghost"
            textColor="brand.100"
            borderRadius="full"
            transitionDuration="0.3s"
            fontFamily="Poppins"
            icon={<BiNavigation style={{ height: "20px", width: "20px" }} />}
          />
        </Tooltip>
        <Tooltip label="Trending" borderRadius="md" placement="bottom">
          <IconButton
            _hover={{ bgColor: "brand.500", textColor: "white" }}
            _active={{ bgColor: "brand.900" }}
            variant="ghost"
            textColor="brand.100"
            borderRadius="full"
            transitionDuration="0.3s"
            fontFamily="Poppins"
            icon={<AiOutlineFire style={{ height: "20px", width: "20px" }} />}
          />
        </Tooltip>
        <Tooltip label="Search" borderRadius="md" placement="bottom">
          <IconButton
            _hover={{ bgColor: "brand.500", textColor: "white" }}
            _active={{ bgColor: "brand.900" }}
            variant="ghost"
            textColor="brand.100"
            borderRadius="full"
            transitionDuration="0.3s"
            fontFamily="Poppins"
            icon={<BiSearch style={{ height: "20px", width: "20px" }} />}
          />
        </Tooltip>
        <Profile />
      </HStack>
    </Box>
  );
};

export default Navbar;
