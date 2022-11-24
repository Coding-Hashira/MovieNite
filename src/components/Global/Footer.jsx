import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      bgColor="blackAlpha.900"
      pt="5"
      pb="3"
      borderTop="1px"
      alignItems="center"
      flexDir="column"
      justifyContent="center"
      display="flex"
      borderTopColor="gray.700"
    >
      <Text display="flex" textAlign="center">
        Made with ♥ By&nbsp;
        <span style={{ color: "brand.100" }}>Jashan Mago</span>
      </Text>
      <HStack pt="3.5">
        <a target="_blank" href="https://github.com/Coding-Hashira/MovieNite">
          <IconButton
            icon={<AiOutlineGithub style={{ height: "25px", width: "25px" }} />}
            variant="link"
            textColor="white"
            maxW="35px !important"
            borderRadius="full"
            transitionDuration="0.3s"
            fontFamily="Poppins"
          />
        </a>
        <a target="_blank" href="https://twitter.com/coding_hashira">
          <IconButton
            icon={
              <AiOutlineTwitter style={{ height: "25px", width: "25px" }} />
            }
            variant="link"
            textColor="white"
            maxW="35px !important"
            borderRadius="full"
            transitionDuration="0.3s"
            fontFamily="Poppins"
          />
        </a>
      </HStack>
    </Box>
  );
};

export default Footer;
