import { Bleed, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ItemList  from "./ItemList";
import Header from "@/components/Header/Header";

export default function MainPage() {
  const navigate = useNavigate();

    return (
      <Box bg="white" w="100vw" h="100vh">
        <Header></Header>
        <Bleed onClick={() => navigate(-1)} cursor="button">
        <Image src="/img2/MainP1.png" w="100vw" h="900px" objectFit="cover"></Image>
        <Flex
        position="absolute"
        direction="column"
        textAlign="center"
        align="center"
        justify="center"
        top="60%"
        left="50%"
        transform="translate(-50%, -50%)"
        gap="4"
        color="white"
        >
        <Text textStyle="3xl" fontWeight="bolder"> First Collection of Accesories </Text>
        <Text fontWeight="bold" textDecoration="underline"> Preorder now </Text>
        </Flex>
        </Bleed>
        <ItemList></ItemList>
      </Box>
    )
  }