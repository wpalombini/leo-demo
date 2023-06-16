import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export const ButtonLink = ({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink href={href} passHref>
      <Button as="a">{children}</Button>
    </NextLink>
  );
};
