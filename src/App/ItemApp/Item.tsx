import { useState } from "react";
import { Image, Card, Text, Button, Stack } from "@chakra-ui/react";
import { Skeleton } from "@/components/ui/skeleton"

export const Item = ({ name, description, price, photo_url }: { name: string, description: string, price: number, photo_url: string }) => {
    const [loading, setLoading] = useState(true);

    return (
        <Stack align="flex-start" gap="4">
            <Card.Root maxW="sm" overflow="hidden" top="20">
            <Skeleton variant="shine" 
                w="100%" 
                h="200px" 
                borderRadius="md" 
                loading={loading}
                css={{
                    "--start-color": "colors.pink.500",
                    "--end-color": "colors.orange.500",
            }}>
                    <Image 
                        src={photo_url} 
                        alt={name} 
                        objectFit="contain" 
                        w="100%" 
                        h="200px" 
                        borderRadius="md"
                        onLoad={() => setLoading(false)}
                    />
            <Card.Body gap="2">
                <Card.Title>{name}</Card.Title>
                <Card.Description>{description}</Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    {price} $
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
            </Skeleton>
        </Card.Root>
        </Stack>
    );
};