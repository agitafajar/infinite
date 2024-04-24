import { Box, HStack, Text } from "@chakra-ui/react";
import { Product } from "./component/Products";
import { LoadMore } from "./component/load-more";
import { fetchProducts } from "./actions/fetch-product";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import Reels from "./component/Reels";
import { Container } from "@chakra-ui/react";

const Page = async () => {
  const products = await fetchProducts(0);

  return (
    // <Box>
    //   <Header />
    //   <Box paddingRight={4} paddingLeft={4}>
    //     <Text fontWeight="semibold" fontSize="xl">
    //       Brands
    //     </Text>
    //     <HStack marginBottom="10px">
    //       <Text
    //         paddingLeft={4}
    //         paddingRight={4}
    //         rounded="lg"
    //         borderWidth="2px"
    //         borderColor="#DDE2C6"
    //         fontWeight="semibold"
    //       >
    //         Nike
    //       </Text>
    //       <Text
    //         paddingLeft={4}
    //         paddingRight={4}
    //         rounded="lg"
    //         borderWidth="2px"
    //         borderColor="#DDE2C6"
    //         fontWeight="semibold"
    //       >
    //         Gucci
    //       </Text>
    //       <Text
    //         paddingLeft={4}
    //         paddingRight={4}
    //         rounded="lg"
    //         borderWidth="2px"
    //         borderColor="#DDE2C6"
    //         fontWeight="semibold"
    //       >
    //         Erigo
    //       </Text>
    //     </HStack>
    //   </Box>
    //   <Product products={products} />
    //   <LoadMore />
    //   <Footer />
    // </Box>
    <Container maxW="container.md" py={8}>
      <Reels />
    </Container>
  );
};

export default Page;
