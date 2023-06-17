import { Box, Center, CenterProps } from "@chakra-ui/react";
import React from "react";

export const PageContainer = (props: CenterProps) => {
  return (
    <Center mt={4} {...props}>
      <Box w={{ base: "100%", md: "50%" }}>{props.children}</Box>
    </Center>
  );
};
