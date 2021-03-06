import React from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import "./ButtonBox.css";
import Button from "./Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      {btnValues.flat().map((btn, i) => {
        return (
          <Button
            key={i}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={() => {
              console.log(`${btn} clicked!`);
            }}
          />
        );
      })}
    </Wrapper>
  );
};

export default App;
