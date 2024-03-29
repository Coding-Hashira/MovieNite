import {
  Box,
  CircularProgress,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useRef, Suspense, lazy } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Breadcrumb } from "../components/Global";

const MovieList = lazy(() => import("../components/Global/MovieList"));

const Search = () => {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const Search = () => {
    search ? setPage(1) : "";

    search != ""
      ? navigate({
          pathname: "/search",
          search: `?${createSearchParams({ query: search })}`,
        })
      : "";

    search ? fetchResults() : "";

    searchRef?.current?.focus();
  };

  const fetchResults = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8be9eb85a8d025c42456c206a5d94317&language=en-US&query=${search}&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((json) => {
        setResults(json);
        setPage(json?.page);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearch(e?.target?.value);
  };

  return (
    <Box pt="24" pb="10" bg="blackAlpha.900" minH="100vH">
      <VStack w="100%" spacing="5">
        <Box w="100%" alignSelf="start" px={{ base: "8", md: "12" }}>
          <Breadcrumb
            pages={[
              { title: "Home", link: "/" },
              { title: "Search", link: "/search" },
            ]}
          />
        </Box>
        <InputGroup w={{ base: "80%", md: "60%" }} pb="14">
          <Input
            ref={searchRef}
            bg="whiteAlpha.50"
            onKeyDown={(e) => (e.key === "Enter" ? Search() : "")}
            value={search}
            onChange={handleChange}
            _focusVisible={{ borderColor: "gray.500" }}
            _hover={{ borderColor: "gray.600" }}
            borderColor="gray.700"
            placeholder="Search"
          />
          <InputRightElement
            minW="-webkit-fit-content"
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
        ) : (
          <Suspense
            fallback={<CircularProgress isIndeterminate color="brand.100" />}
          >
            <MovieList
              page={page}
              totalPages={results?.total_pages}
              movies={results?.results}
              setPage={setPage}
              onPageChange={fetchResults}
            />
          </Suspense>
        )}
      </VStack>
    </Box>
  );
};

export default Search;
