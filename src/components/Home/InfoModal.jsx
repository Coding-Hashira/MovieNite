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
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

const InfoModal = ({ isOpen, onClose, movie, allGenres }) => {
  const [movieGenre, setMovieGenre] = useState([]);

  useEffect(() => {
    const getGenres = () => {
      let genreIds = movie?.genre_ids;
      let movieGenres = [];
      let genres = allGenres?.filter((genreObj) =>
        genreIds?.includes(genreObj.id)
      );
      genres?.forEach((genre) => movieGenres?.push(genre?.name));

      setMovieGenre(movieGenres);
    };
    getGenres();
  }, []);

  return (
    <DarkMode>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily="body" textColor="white">
          <ModalHeader>Movie Summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems="flex-start">
              <Text>Title: {movie?.title}</Text>
              <Text>
                Release Date:{" "}
                {movie?.release_date
                  ? formatDate(movie?.release_date)
                  : "Upcoming"}
              </Text>
              <Text>
                Genres:{" "}
                {movieGenre?.length > 1 ? movieGenre?.join(", ") : "None"}
              </Text>
              <Text>Storyline: {movie?.overview}</Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Link to={`/movie/${movie?.id}`}>
              <Button
                _hover={{ bgColor: "brand.hover", textColor: "white" }}
                _active={{ bgColor: "brand.hover" }}
                bgColor="brand.900"
                rounded="md"
                display="flex"
                alignItems="center"
              >
                Know More
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

export default InfoModal;
