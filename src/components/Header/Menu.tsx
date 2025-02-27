import { Button, For, HStack, Box, VStack } from "@chakra-ui/react"
import { IoMenu } from "react-icons/io5"
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Menu() {
  return (
    <HStack wrap="wrap">
      <For each={["start"]}>
        {(placement) => (
          <DrawerRoot key={placement} placement={placement}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <Button variant="ghost" size="lg">
              <IoMenu />
                Menu
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
              <VStack align="start" mt="20px">
              <Box as="a" cursor="button">Home</Box>
              <Box as="a" cursor="button">Shop</Box>
              <Box as="a" cursor="button">Collections</Box>
              <Box as="a" cursor="button">Contact</Box>
            </VStack>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Return</Button>
                </DrawerActionTrigger>
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        )}
      </For>
    </HStack>
  )
}
