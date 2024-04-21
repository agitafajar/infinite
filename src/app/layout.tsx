"use client";

import { ChakraProvider, CSSReset, extendTheme, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Box>{children}</Box>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default Layout;
