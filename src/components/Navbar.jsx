import {
  Box,
  HStack,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BiMenu, BiNavigation, BiSearch } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import { AiOutlineFire } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    const handleBg = () => {
      if (window.scrollY > 150) {
        setBgColor("rgb(20,20,20)");
      } else setBgColor("transparent");
    };

    window.addEventListener("scroll", handleBg);

    return () => {
      window.removeEventListener("scroll", handleBg);
    };
  }, []);

  return (
    <Box
      px={{ base: "1", md: "10" }}
      bg={bgColor}
      position="fixed"
      width="100vw"
      zIndex="modal"
      display="flex"
      transition="all"
      transitionDuration="0.4s"
      justifyContent="space-between"
      pt="6"
      pb="3"
    >
      <Box display={{ base: "inline", md: "none" }}>
        <IconButton
          _hover={{ bgColor: "brand.500", textColor: "white" }}
          _active={{ bgColor: "brand.900" }}
          variant="ghost"
          textColor="brand.100"
          ref={btnRef}
          borderRadius="full"
          size="lg"
          height="40px"
          minWidth="40px"
          transitionDuration="0.3s"
          onClick={onOpen}
          fontFamily="Poppins"
          icon={<BiMenu style={{ height: "27px", width: "27px" }} />}
        />
      </Box>
      <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Box
        position={{ base: "absolute", md: "static" }}
        width={{ base: "calc(100vw - 0.5em)", md: "-webkit-max-content" }}
        display="flex"
        justifyContent="center"
      >
        <Logo display={{ base: "none", md: "inline" }} />
      </Box>

      <HStack display={{ base: "none", md: "flex" }} spacing="4">
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