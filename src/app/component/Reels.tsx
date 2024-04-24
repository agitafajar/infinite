"use client";

import { Box, Text, Flex, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";

const Reels = () => {
  const [currentPage, setCurrentPage] = useState(0);
  let startY: number;

  // Dummy data for demonstration
  const reelsData = [
    {
      id: 1,
      title: "Reel 1",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Reel 2",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 1,
      title: "Reel 3",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Reel 4",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 1,
      title: "Reel 5",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Reel 6",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    // Add more dummy data as needed
  ];

  const handleSwipeUp = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, reelsData.length - 1));
  };

  const handleSwipeDown = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <Flex direction="column" height="100vh" overflow="hidden">
      <Box
        key={reelsData[currentPage].id}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        my={2}
        height="100%"
        onTouchStart={(e) => (startY = e.touches[0].clientY)}
        onTouchMove={(e) => {
          const distance = startY - e.touches[0].clientY;
          if (distance > 100) {
            handleSwipeUp();
          } else if (distance < -100) {
            handleSwipeDown();
          }
        }}
      >
        <Text mt={2} textAlign="center">
          {reelsData[currentPage].title}
        </Text>
        <AspectRatio ratio={1}>
          <iframe
            title="naruto"
            src={reelsData[currentPage].url}
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Flex>
  );
};

export default Reels;
