"use client";

import { HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <HStack
        bgColor="#DDE2C6"
        paddingLeft={4}
        paddingRight={4}
        paddingTop={2}
        paddingBottom={2}
        position="sticky"
        bottom="0px"
        zIndex="50"
        justifyContent="space-between"
        w="100%"
        roundedTop="3xl"
      >
        <VStack>
          <Image
            src={"./assets/icons/recommend.svg"}
            alt={""}
            width={30}
            height={30}
          />
          <Text marginTop="-10px">Recomend</Text>
        </VStack>
        <VStack>
          <Image
            src={"./assets/icons/dashboard.svg"}
            alt={""}
            width={30}
            height={30}
          />
          <Text marginTop="-10px">Category</Text>
        </VStack>
        <VStack>
          <Image
            src={"./assets/icons/notif.svg"}
            alt={""}
            width={30}
            height={30}
          />
          <Text marginTop="-10px">Notification</Text>
        </VStack>
        <VStack>
          <Image
            src={"./assets/icons/user.svg"}
            alt={""}
            width={30}
            height={30}
          />
          <Text marginTop="-10px">Profil</Text>
        </VStack>
      </HStack>
    </>
  );
}
