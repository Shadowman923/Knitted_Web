import { Box } from "@chakra-ui/react";
import ItemList  from "../ItemList";
import Header from "@/components/Header/Header";
import FirstPhoto from "./FirstPhoto";
import FirstBlock from "./FirstBlock";

export default function MainPage() {

    return (
      <Box bg="white" w="100vw" h="100vh">
        <Header />
        <FirstPhoto />
        <FirstBlock />
        <ItemList />
      </Box>
    )
  }