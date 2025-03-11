import {
  Box,
  Button,
  Card,
  Input,
  Stack,
  Flex,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Field } from "@/components/ui/field";
import { useState } from "react";

export default function Intro() {
  const navigate = useNavigate();
  const leftValue = useBreakpointValue({ base: "50%", lg: "50%", xl: "20%" });
  const transformValue = useBreakpointValue({
    base: "translate(-50%, -50%)",
    lg: "translate(-50%, -50%)",
    xl: "none",
  });
  const [showCard, setShowCard] = useState(false);
  return (
    <Box
      position="relative"
      w="100vw"
      h="100vh"
      overflow="hidden"
      data-state="open"
      _open={{
        animationName: "fade-in",
        animationDuration: "1000ms",
      }}
    >
      <video
        autoPlay
        //loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "auto",
        }}
      >
        <source src="/videos/videobackground.mp4?v=1" type="video/mp4" />
      </video>
      <Flex
        as="header"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        bg="rgba(0, 0, 0, 0.3)"
        color="white"
        zIndex="1"
        align="center"
        justifyContent="center"
      >
        <Image src="/img2/Knitted_logo.png" h="150px" />
      </Flex>
      {!showCard && (
        <Flex
          flexDirection="column"
          position="absolute"
          bottom="20%"
          align="center"
          left={leftValue}
          transform={transformValue}
        >
          <Text textStyle="5xl">"SOME TEXT ABOUT BRAND"</Text>
          <Button
            size={["md", "lg", "xl"]}
            bg="gray.300"
            variant="subtle"
            color="black"
            onClick={() => setShowCard(true)}
            minW={["150px", "200px", "250px"]}
            px={8}
            py={6}
            borderRadius="md"
            fontSize="xl"
            fontWeight="bold"
          >
            LOGIN
          </Button>
        </Flex>
      )}
      {showCard && (
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          justify="center"
          align="center"
          animation="s"
          data-state="open"
          animationDuration="1000ms"
          animationStyle={{
            _open: "slide-fade-in",
            _closed: "slide-fade-out",
          }}
        >
          <Card.Root maxW="xl" variant="elevated">
            <Card.Header>
              <Card.Title>Sign up</Card.Title>
              <Card.Description>
                Писать не обязательно, вход просто по Sign in
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Stack gap="4" w="full">
                <Field label="First Name">
                  <Input />
                </Field>
                <Field label="Last Name">
                  <Input />
                </Field>
              </Stack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">Cancel</Button>
              <Button variant="outline">Sign in</Button>
            </Card.Footer>
          </Card.Root>
        </Flex>
      )}
    </Box>
  );
}
