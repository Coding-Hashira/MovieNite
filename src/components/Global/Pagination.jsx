import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ getPrevPage, getNextPage, page, totalPages }) => {
  return (
    <HStack justifyContent="center" w="100%" paddingY="20">
      <Box>
        <IconButton
          _hover={{ bgColor: "brand.500", textColor: "white" }}
          _active={{ bgColor: "brand.900" }}
          variant="ghost"
          textColor="brand.100"
          borderRadius="full"
          size="lg"
          height="30px"
          minWidth="30px"
          transitionDuration="0.3s"
          fontFamily="Poppins"
          icon={<AiOutlineLeft style={{ height: "20px", width: "20px" }} />}
          onClick={() => getPrevPage(page)}
        />
      </Box>
      <Box>
        <Text>
          {page} of {totalPages}
        </Text>
      </Box>
      <Box>
        <IconButton
          _hover={{ bgColor: "brand.500", textColor: "white" }}
          _active={{ bgColor: "brand.900" }}
          variant="ghost"
          textColor="brand.100"
          borderRadius="full"
          size="lg"
          height="30px"
          minWidth="30px"
          transitionDuration="0.3s"
          fontFamily="Poppins"
          icon={<AiOutlineRight style={{ height: "20px", width: "20px" }} />}
          onClick={() => getNextPage(page)}
        />
      </Box>
    </HStack>
  );
};

export default Pagination;
