import { Box, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";

export default function FirstBlock() {
  return (  
    <Box>
        <Flex
        display="flex"
        h="100px"
        justifyContent="center"
        alignItems="center"
        >
        <Text color="black" fontFamily="serif" fontSize="3xl">Explore a Knitted</Text>
        </Flex>
        <Grid>
            <GridItem >
                <Image src="/img2/some_photo.png" />
            </GridItem>
            <GridItem >
                <Image src="/img2/some_photo.png" />
            </GridItem>
            <GridItem >
                <Image src="/img2/some_photo.png" />
            </GridItem>
            <GridItem >
                <Image src="/img2/some_photo.png" />
            </GridItem>
        </Grid>
    </Box>
  ) 
}