import { Box } from "@chakra-ui/react";
import React from "react";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <Box mt={4}>{children}</Box>;
};
