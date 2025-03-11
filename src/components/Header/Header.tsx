import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TabsComponent from "../ui/tabs";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import { RootState } from "@/store/storeRedux";
export default function Header() {
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.name);
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      p="4"
      bg="rgba(0, 0, 0, 0.3)"
      color="white"
      zIndex="1"
      align="center"
      justifyContent="space-between"
    >
      <Menu />
      <Image
        src="/img2/Knitted_logo.png"
        h="55px"
        onClick={() => navigate(-1)}
        cursor="button"
      />
      <Box>
        <Text fontSize="2xl">Welcome, {username || "Guest"}!</Text>
      </Box>
      <TabsComponent />
    </Flex>
  );
}
