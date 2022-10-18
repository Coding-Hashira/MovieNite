import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <Box bgColor={"blackAlpha.900"} h="100vh" color="white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
