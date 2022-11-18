import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import MovieList from "../components/Global/MovieList";

const Search = () => {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&query=${search}&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((json) => {
        setResults(json);
        setPage(json?.page);
        console.log(json);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  };

  const handleChange = (e) => {
    setSearch(e?.target?.value);
  };

  return (
    <Box pt="24" bg="blackAlpha.900" minH="100vH">
      <VStack w="100%">
        <InputGroup w={{ base: "80%", md: "60%" }} pb="14">
          <InputLeftElement
            display={{ base: "none", md: "inline" }}
            color="gray.600"
            children={<AiOutlineSearch />}
          />
          <Input
            ref={searchRef}
            bg="whiteAlpha.50"
            value={search}
            onChange={handleChange}
            _focusVisible={{ borderColor: "gray.500" }}
            _hover={{ borderColor: "gray.600" }}
            borderColor="gray.700"
            placeholder="Search"
          />
          <InputRightElement
            minW="-webkit-fit-content"
            display={{ base: "none", md: "inline" }}
            children={
              <Button
                _hover={{ bgColor: "brand.hover", textColor: "white" }}
                _active={{ bgColor: "brand.hover" }}
                bgColor="brand.900"
                rounded="none"
                roundedTopRight="md"
                onClick={() => {
                  search ? setPage(1) : "";

                  search != ""
                    ? navigate({
                        pathname: "/search",
                        search: `?${createSearchParams({ query: search })}`,
                      })
                    : "";

                  search ? fetchResults() : "";

                  searchRef?.current?.focus();
                }}
                roundedBottomRight="md"
                _focusVisible={{ boxShadow: "none" }}
              >
                Search
              </Button>
            }
          />
          <InputRightElement
            minW="-webkit-fit-content"
            display={{ base: "inline", md: "none" }}
            children={
              <IconButton
                _hover={{ bgColor: "brand.hover", textColor: "white" }}
                _active={{ bgColor: "brand.hover" }}
                bgColor="brand.900"
                rounded="none"
                roundedTopRight="md"
                onClick={() => {
                  search ? setPage(1) : "";

                  search != ""
                    ? navigate({
                        pathname: "/search",
                        search: `?${createSearchParams({ query: search })}`,
                      })
                    : "";

                  search ? fetchResults() : "";

                  searchRef?.current?.focus();
                }}
                roundedBottomRight="md"
                _focusVisible={{ boxShadow: "none" }}
                icon={<AiOutlineSearch />}
              />
            }
          />
        </InputGroup>
        {!query?.get("query") ? (
          ""
        ) : isLoading ? (
          <CircularProgress color="brand.100" isIndeterminate />
        ) : results?.results?.length > 1 ? (
          <MovieList
            isLoading={isLoading}
            page={page}
            totalPages={results?.total_pages}
            movies={results?.results}
            setPage={setPage}
            setIsLoading={setIsLoading}
            onPageChange={fetchResults}
          />
        ) : (
          <Text
            display="flex"
            textColor="gray.400"
            fontSize={{ base: "lg", md: "xl" }}
            fontStyle="italic"
            w={{ base: "80%", md: "100%" }}
            justifyContent="center"
            textAlign="center"
          >
            Sorry, We Couldn't Find Any Movie :(
          </Text>
        )}
        {/* )} */}
      </VStack>
    </Box>
  );
};

export default Search;
