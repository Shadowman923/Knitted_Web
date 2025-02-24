import { useState, useEffect } from "react"
import { Item } from "./Item"
import { Skeleton } from "@/components/ui/skeleton"
import { Stack } from "@chakra-ui/react";

export default function ItemList() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("https://api.slingacademy.com/v1/sample-data/products")
          .then((response) => response.json())
          .then((data) => {
              setItems(data.products.slice(0, 6)); // Берем первые 6 товаров
              setLoading(false);
          })
          .catch((error) => console.error("Ошибка загрузки:", error));
  }, []);

  return (
      <Stack direction="row" wrap="wrap">
          {loading ? (
              Array(6).fill(null).map((_, i) => <Skeleton key={i} w="300px" h="400px" borderRadius="md" />)
          ) : (
              items.map((item) => (
                  <Item 
                      key={item.id} 
                      name={item.name} 
                      description={item.description} 
                      price={item.price} 
                      photo_url={item.photo_url} 
                  />
              ))
          )}
      </Stack>
  );
}