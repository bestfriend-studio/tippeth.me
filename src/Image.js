import React, { useState } from "react";
import { Flex, Button, Slider, Image, Box, Text } from "rimble-ui";
import styled from "styled-components";
import "./App.css";

const BlurImage = styled(Image)`
  filter: blur(${props => props.blur}px);
`;

function App() {
  const [amount, setAmount] = useState(0.01);
  const [blur, setBlur] = useState(100);

  const handleSlider = e => {
    setAmount(e.target.value);
  };

  const submitTip = () => {
    setBlur(100 - amount * 10);
    // setBlur(1);
  };

  return (
    <Box className="App">
      <BlurImage
        alt="random unsplash image"
        borderRadius={8}
        height="auto"
        blur={blur}
        src="https://source.unsplash.com/random/1280x720"
      />
      <Box>
        <Flex>
          <Text>$.01</Text>
          <Slider
            min={".01"}
            max={"10"}
            step={".01"}
            value={amount}
            onChange={handleSlider}
          />
          <Text>$10</Text>
        </Flex>

        <Button.Outline onClick={submitTip}>tip ${amount}</Button.Outline>
      </Box>
    </Box>
  );
}

export default App;
