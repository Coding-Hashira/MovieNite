import React from "react";
import { Button as ChakraBtn } from "@chakra-ui/react";

const Button = ({ text, color }) => {
  return (
    <ChakraBtn
      _hover={{ bgColor: "brand.hover", textColor: "white" }}
      _active={{ bgColor: "brand.hover" }}
      bgColor={color}
      rounded={{ base: "sm", md: "md" }}
      display="flex"
      alignItems="center"
    >
      {text}
    </ChakraBtn>
  );
};

export default Button;
