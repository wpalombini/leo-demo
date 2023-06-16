import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { useUserStore } from "@/lib/stores/user.store";

export const UserProfileDetails = () => {
  const { name, title } = useUserStore();

  return (
    <Card>
      <CardHeader>
        <Heading size="md">User Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name
            </Heading>
            <Text pt="2" fontSize="md">
              {name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Job title
            </Heading>
            <Text pt="2" fontSize="md">
              {title}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
