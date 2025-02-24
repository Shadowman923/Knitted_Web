import { Box, Flex } from "@chakra-ui/react";
import TabsComponent from "../components/ui/tabs";
import { Menu } from "../Header/Menu";

export default function Header() {
  return (
    <Flex
    as="header"
    position="absolute" // 👈 Закрепляем `header` сверху
    top="0"
    left="0"
    w="100%"
    p="4"
    bg="rgba(0, 0, 0, 0.3)" // 👈 Полупрозрачный фон
    color="white"
    zIndex="1"
    align="center"
    justifyContent="space-between">
      {/* Меню слева */}
      <TabsComponent />
      {/* Лого по центру */}
      <Box fontSize="xl" fontWeight="bold">LOGO</Box>
      <Menu />
      {/* Вкладки справа */}
    </Flex>
  );
}