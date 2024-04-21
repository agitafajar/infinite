/* eslint-disable @next/next/no-img-element */
import { Text, Box, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

export interface ProductProps {
  products: Product[] | null;
}

export function Product({ products }: ProductProps) {
  return (
    <SimpleGrid columns={2} spacing={4} padding={4} marginTop="-20px">
      {products ? (
        products.map((product) => (
          <>
            <Box key={product.id} height="300px">
              <Box
                borderWidth="1px"
                borderRadius="xl"
                p={4}
                borderColor="#DDE2C6"
                height="240px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  height="100%"
                  width="auto"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <HStack spacing={4}>
                <Text fontWeight="bold" my={2} noOfLines={2}>
                  {product.title}
                </Text>
                <VStack align="flex-start" gap={0}>
                  <Text>10.000</Text>
                  <HStack>
                    <img src="./assets/icons/star.svg" width="20px" alt="" />
                    <Text>5.0</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </>
        ))
      ) : (
        <Box>No beers available!</Box>
      )}
    </SimpleGrid>
  );
}
