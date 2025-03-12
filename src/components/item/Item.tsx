import { useState } from "react";
import { Image, Card, Stack, Text, Button, Box } from "@chakra-ui/react";
import { Skeleton } from "../../components/ui/skeleton";

const ExpandableText = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = text.length > maxLength;

  return (
    <Box display="flex" flexDirection="column">
      <Text>
        {isExpanded || !isLongText ? text : `${text.slice(0, maxLength)}...`}
      </Text>
      {isLongText && (
        <Button
          size="sm"
          variant="plain"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide" : "More"}
        </Button>
      )}
    </Box>
  );
};

export const Item = ({
  name,
  title,
  description,
  price,
  photo_url,
}: {
  name: string;
  title: string;
  description: string;
  price: number;
  photo_url: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <Stack align="flex-start" gap="4">
      <Card.Root maxW="sm" overflow="hidden" top="20">
        <Skeleton
          variant="shine"
          w="100%"
          h="200px"
          borderRadius="md"
          loading={loading}
          css={{
            "--start-color": "colors.pink.500",
            "--end-color": "colors.orange.500",
          }}
        >
          <Image
            src={photo_url}
            alt={name}
            objectFit="cover" //мб изменить на контейн чтобы не обрезало
            w="100%"
            h="200px"
            borderRadius="md"
            onLoad={() => setLoading(false)}
          />
        </Skeleton>
        <Card.Body gap="2" overflow="hidden">
          <Card.Title>{title}</Card.Title>
          <Card.Description h="50px">
            <ExpandableText text={description} maxLength={30} />
          </Card.Description>
          <Text>{price}$</Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Card.Root>
    </Stack>
  );
};
