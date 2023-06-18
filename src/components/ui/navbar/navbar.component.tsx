import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { ReactNode } from "react";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    as={NextLink}
    href={href}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const { data: session, status } = useSession();
  const sessionIsLoading = status === "loading";
  const isSignedIn = !!session;

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container p={0} maxW={{ base: "100%", xl: "75%" }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <NavLink href="/">
              <Image
                alt="Leo-Logo"
                width={40}
                height={40}
                src="/leonardo-logo.webp"
              />
            </NavLink>
            {isSignedIn && (
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <NavLink href="/dashboard">Dashboard</NavLink>
                <NavLink href="/profile">Profile</NavLink>
              </HStack>
            )}
          </HStack>
          <Flex alignItems={"center"}>
            {!sessionIsLoading && isSignedIn && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={session.user?.image as string} />
                </MenuButton>
                <MenuList>
                  <MenuItem as={NextLink} href="/dashboard">
                    Dashboard
                  </MenuItem>
                  <MenuItem as={NextLink} href="/profile">
                    Profile
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
            {!sessionIsLoading && !session && (
              <Button onClick={() => signIn()}>Login</Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
