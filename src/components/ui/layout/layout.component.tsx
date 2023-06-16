import { Container } from "@chakra-ui/react";
import React from "react";

import { NavBar } from "../navbar/navbar.component";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Container maxW={{ base: "100%", xl: "75%" }}>{children}</Container>
    </>
  );
};
