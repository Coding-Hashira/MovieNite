import { Box, CircularProgress, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const TagButton = ({ text, key, year, setYear }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(year == text);
  }, [year]);

  return (
    <Button
      textColor="white"
      variant={active ? "solid" : "ghost"}
      key={key}
      _hover={
        active
          ? { bgColor: "brand.hover", textColor: "white" }
          : { bgColor: "whiteAlpha.50" }
      }
      _active={
        active ? { bgColor: "brand.hover" } : { bgColor: "whiteAlpha.100" }
      }
      _focusVisible={{ boxShadow: "none" }}
      transition="all 0.3s"
      bgColor={active ? "brand.900" : ""}
      fontWeight="medium"
      onClick={() => {
        if (year != text) {
          setYear(text);
        } else if (year == text) {
          setYear("");
        }
      }}
      colorScheme={active ? "" : "whiteAlpha"}
    >
      {text}
    </Button>
  );
};

const YearDiscover = ({ year, setYear }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [years, setYears] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const setYear = () => {
      let yearsLocal = [];
      let year = new Date().getFullYear();

      Array.from(Array(30).keys())?.map((num) => yearsLocal.push(year - num));

      yearsLocal = yearsLocal.slice(0, 30);

      setYears(yearsLocal);

      console.log(years);
    };

    setYear();
    setIsLoading(false);
  }, []);

  return (
    <Box w="100%">
      {isLoading ? (
        <CircularProgress color="brand.100" isIndeterminate />
      ) : (
        years?.map((text, key) => (
          <TagButton key={key} year={year} setYear={setYear} text={text} />
        ))
      )}
    </Box>
  );
};

export default YearDiscover;
