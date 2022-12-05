import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex w="100%" p="10px" bg="blue" justifyContent="space-between">
      <Box w="15%" m="auto">
        <Text fontWeight="bold" fontSize="35px">
          Cointab
        </Text>
      </Box>
      <Flex
        w="75%"
        fontSize={"20px"}
        fontWeight={"bold"}
        color="white"
        justifyContent={"center"}
        alignItems="center"
        gap="300px"
      >
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/login">Login</Link>
        </Box>
        <Box>
          <Link to="/signup">Signup</Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
