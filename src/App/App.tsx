import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Intro from "../App/Intro";
import ItemList from "./ItemApp/ItemList";

import { Flex } from "@chakra-ui/react";
import { Underground } from "./Underground";


export default function App() {
  return (
    <Flex minH="100dvh" flexDirection="column">
    <Header />
    <Intro />
    <Underground />
    <ItemList />
    <Footer />
  </Flex>
  );
}