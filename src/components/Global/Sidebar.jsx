import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  IconButton,
  Tooltip,
  DrawerOverlay,
  DrawerContent,
  DarkMode,
  Button,
  Text,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Logo from "./Logo";
import Profile from "./Profile";
import { BiNavigation, BiSearch } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, btnRef }) => {
  return (
    <DarkMode>
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent textColor="white">
          <DrawerHeader>
            <Logo display="inline" />
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody display="flex" flexDirection="column">
            <Link to="/discover">
              <Button
                borderRadius="none"
                bg="transparent"
                display="flex"
                textColor="white"
                justifyContent="flex-start"
                alignItems="center"
                gap="10px"
                px="2px"
                _focusVisible={{ outline: "none" }}
                _active={{ bgColor: "rgb(48 205 147 / 40%)" }}
                _hover={{ bgColor: "rgb(48 205 147 / 35%)" }}
              >
                <BiNavigation
                  style={{
                    color: "var(--chakra-colors-brand-100)",
                    height: "20px",
                    width: "20px",
                  }}
                />
                <Text fontWeight="normal">Discover</Text>
              </Button>
            </Link>
            <Button
              borderRadius="none"
              bg="transparent"
              display="flex"
              textColor="white"
              justifyContent="flex-start"
              alignItems="center"
              gap="10px"
              px="2px"
              _focusVisible={{ outline: "none" }}
              _active={{ bgColor: "rgb(48 205 147 / 40%)" }}
              _hover={{ bgColor: "rgb(48 205 147 / 35%)" }}
            >
              <AiOutlineFire
                style={{
                  color: "var(--chakra-colors-brand-100)",
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text fontWeight="normal">Trending</Text>
            </Button>
            <Button
              borderRadius="none"
              bg="transparent"
              display="flex"
              textColor="white"
              justifyContent="flex-start"
              alignItems="center"
              gap="10px"
              px="2px"
              _focusVisible={{ outline: "none" }}
              _active={{ bgColor: "rgb(48 205 147 / 40%)" }}
              _hover={{ bgColor: "rgb(48 205 147 / 35%)" }}
            >
              <BiSearch
                style={{
                  color: "var(--chakra-colors-brand-100)",
                  height: "20px",
                  width: "20px",
                }}
              />
              <Text fontWeight="normal">Search</Text>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DarkMode>
  );
};

export default Sidebar;
