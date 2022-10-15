import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: { body: "'Poppins', sans-serif" },
  colors: {
    brand: { 500: "#29bb85", 900: "#25a777", 100: "#30cd93" },
  },
});

export default theme;
