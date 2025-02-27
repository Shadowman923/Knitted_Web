import { Bleed, Flex, Image, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function FirstPhoto() {
const navigate = useNavigate();
return (
<Box>
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
</Box>
)}