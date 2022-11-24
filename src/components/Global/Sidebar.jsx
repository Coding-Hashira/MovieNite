import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DarkMode,
  Button,
  Text,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Logo from "./Logo";
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
            <Logo display="inline" onClick={onClose} />
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody display="flex" flexDirection="column">
            <Link to="/discover" width="100%">
              <Button
                borderRadius="none"
                onClick={() => onClose()}
                bg="transparent"
                width="100%"
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
            <Link to="/trending" w="100%">
              <Button
                borderRadius="none"
                onClick={() => onClose()}
                bg="transparent"
                display="flex"
                textColor="white"
                justifyContent="flex-start"
                alignItems="center"
                w="100%"
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
            </Link>
            <Link w="100%" to="/search">
              <Button
                w="100%"
                borderRadius="none"
                onClick={() => onClose()}
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
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DarkMode>
  );
};

export default Sidebar;
