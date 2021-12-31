import React from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import "./App.css";
import { Flex, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex backgroundColor={"red"} height={"400px"} width={"399px"}>
      <Text color={"twitter.100"}>khizer</Text>
      <Wrapper>
        <Text>Wahajs wrapper is faulty</Text>
        <Screen value="0" />
       <ButtonBox>
          <Button
            className=""
            value="0"
            onClick={() => {
              console.log("Button clicked!");
            }}
          >ada</Button>
        </ButtonBox>
      </Wrapper>
    </Flex>
  );
};

export default App;
