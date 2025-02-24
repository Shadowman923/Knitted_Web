import { Box, Button, ButtonGroup } from "@chakra-ui/react"


export default function Intro() {
  return (
    <Box position="relative" w="100vw" h="100vh" overflow="hidden" data-state="open"
    _open={{
      animationName: "fade-in",
      animationDuration: "3000ms",
    }}>
      {/* Видео на фоне */}
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
        }}
      >
        <source src="/videos/videobackground.mp4?v=1" type="video/mp4" />
      </video>

      {/* Контент поверх видео */}
      <ButtonGroup 
        size="2xl" 
        variant="outline" 
        position="relative"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        h="4/5">
      <Button colorPalette="blue">Buy Now</Button>
      <Button>Order</Button>
      </ButtonGroup>
    </Box>
  );
}