"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Circle,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
  return (
    <>
      <Box
        bgColor="#DDE2C6"
        padding={4}
        position="sticky"
        top="0px"
        zIndex="50"
      >
        <HStack>
          <InputGroup bgColor="white" borderRadius="full">
            <InputLeftElement pointerEvents="none">
              <SearchIcon w={5} h={5} />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Cari baju, tas, sepatu, dll"
              borderRadius="full"
            />
          </InputGroup>
          <Circle bgColor="white" padding={2}>
            <Image
              src="./assets/icons/cart.svg"
              alt={""}
              width={24}
              height={24}
            />
          </Circle>
        </HStack>
      </Box>
      <Box
        height="80px"
        bgColor="#DDE2C6"
        borderBottomRadius="30px"
        borderBottomWidth="4px"
      ></Box>
      <Box padding={2}>
        <SimpleGrid
          marginTop="-80px"
          bgColor="white"
          rounded="xl"
          borderWidth="2px"
          borderColor="#707B90"
          zIndex={10}
          columns={5}
          paddingTop={2}
          paddingBottom={2}
        >
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/home.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Home</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/electric.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Eletric</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/laptop.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Laptop</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/games.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Games</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/books.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Book</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/lamp.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Lamp</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/gift.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Gift</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/headphone.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">HP</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/security.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Security</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image
                src={"./assets/icons/dashboards.svg"}
                alt={""}
                width={50}
                height={50}
              />
              <Text marginTop="-10px">Category</Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
