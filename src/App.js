import React, { useState } from "react";
import { Flex, Radio, Field, Loader, Select, Button, Slider, Image, Box, Text, Heading, Card, Input, Link } from "rimble-ui";
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
      <Flex justifyContent="center">
        <Flex width="800px" flexDirection="row" alignItems="stretch">
          <Heading mr={3} as={"h1"} fontSize={7} fontWeight={4} color={"black"} mt={4}>tippeth.me</Heading>
          <Image src="tippeth.svg" />
        </Flex>
      </Flex>
      <Flex mt={2} justifyContent="center">
        <Flex width="800px">
          <Text textAlign="left" fontWeight={3}>Crypto tipping for any site.</Text>
        </Flex>
      </Flex>
        <Flex flexDirection={["column", "row"]} justifyContent="center" mt={4}>
          <Flex width="800px" bg="white">
            <Box
              border={1}
              borderColor="black"
              borderWidth={3}
              width="420px"
              mr={4}
              boxShadow="inset 0px -8px 0px rgba(236, 246, 161, 1)"
            >
                <Heading textAlign="left" m={4} as={"h2"}>Get paid for content</Heading>
                <Text textAlign="left" fontWeight={2} fontSize={3} m={4}>
                  Add this tag to your website and anyone with the tippeth plugin will be able to send you some crypto to your wallet.
                </Text>
              <Card borderRadius={2} bg="#041414" py={3} pl={3} m={4}>
                <Text lineHeight={1} textAlign="left" fontFamily="monospace" color="#ECF6A1">{'<meta name="eth-address" content="0xoaoaojenkdi" />'}</Text>
              </Card>
              <Text textAlign="left" px={4}>
                Not got a wallet? We recommend the fine folks at <Link>Argent</Link>
              </Text>
              <Button my={4} borderRadius={0} fontSize={4} pt={4} px={4}>Copy tag</Button>
            </Box>
            <Box
              border={1}
              borderColor="black"
              borderWidth={3}
              width="420px"
              mr={4}
              boxShadow="inset 0px 8px 0px rgba(248, 36, 149, 0.4)"
            >
                <Heading textAlign="left" m={4} as={"h2"}>Start tipping</Heading>
                <Text textAlign="left" fontWeight={2} fontSize={3} m={4}>
                  <ol>
                    <li>Connect your wallet</li>
                    <li>Choose an amount</li>
                    <li>Choose a token</li>
                  </ol>
                </Text>
                <Button mt={4} borderRadius={0} fontSize={4}>Get the plugin</Button>
            </Box>
          </Flex>
        </Flex>
        <Flex justifyContent="center" my={5}>
        <Card border={1} borderColor="black" borderWidth={3} width={"420px"}>
          <Heading textAlign="left" as={"h1"} fontSize={4}>Send tip</Heading>
            <Text fontSize={1} textAlign="left" fontWeight={3} required={"true"} width="100%" mt={4}>Amount</Text>
              <Flex flexDirection="row" mb={3}>
                <Radio required={"true"} label="$1 USD" mr={2} />
                <Radio required={"true"} defaultChecked label="$5 USD" mr={2} />
                <Radio required={"true"} label="$10 USD" my={2} />
              </Flex>
            <Field width="100%" label="Choose your currency">
              <Select
                borderRadius={0} borderColor="black" border={1} borderWidth={3}
                required={true}
                width="100%"
                options={[
                  { value: "eth", label: "Ether" },
                  { value: "dai", label: "DAI" },
                  { value: "USDc", label: "USDc" },
                ]}
              />
            </Field>
            <Button mt={3} width="100%" borderRadius={0}>Send tip</Button>
            </Card>
          </Flex>

          <Flex justifyContent="center" my={5}>
          <Card border={1} borderColor="black" borderWidth={3} width={"420px"}>
            <Flex flexDirection="left" alignItems="center">
            <Loader size="40px" mr={2}  />
            <Heading textAlign="center" as={"h1"} fontSize={4}>Confirm in your wallet</Heading>
            </Flex>
            <Text mt={3} textAlign="left">This will disappear once you confirm your tip.</Text>
            <Button mt={4} width="100%" borderRadius={0}>Close</Button>
              </Card>

            </Flex>

          <Flex justifyContent="center" my={5}>
          <Card border={1} borderColor="black" borderWidth={3} width={"420px"}>
            <Heading textAlign="left" as={"h1"} fontSize={4}>Tip failed</Heading>
              <Button mt={3} width="100%" borderRadius={0}>Try again</Button>
              </Card>
            </Flex>
      </Box>
  );
}

export default App;
