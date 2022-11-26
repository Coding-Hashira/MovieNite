import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalHeader,
  DarkMode,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GenreDiscover } from "../Discover";
import { createSearchParams, useNavigate } from "react-router-dom";

const FilterModal = ({ isOpen, onClose }) => {
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  return (
    <DarkMode>
      <Modal
        blockScrollOnMount={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent minW="60vw" fontFamily="body" textColor="white">
          <ModalHeader>Filter by Genres</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="2">
            <GenreDiscover genre={genre} setGenre={setGenre} />
          </ModalBody>
          <ModalFooter w="100%" display="flex" justifyContent="center">
            <Button
              _hover={{ bgColor: "brand.hover", textColor: "white" }}
              _active={{ bgColor: "brand.hover" }}
              bgColor="brand.900"
              rounded="md"
              onClick={() => {
                let params = genre ? { id: genre } : {};

                navigate({
                  pathname: "/discover",
                  search: `?${createSearchParams(params)}`,
                });

                onClose();
              }}
              display="flex"
              _focusVisible={{ boxShadow: "none" }}
              alignItems="center"
            >
              Apply Filters
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

export default FilterModal;
