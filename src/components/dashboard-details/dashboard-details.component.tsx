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

import { CountryType } from "@/lib/types/country-query.type";

export const DashBoardDetails = ({ country }: CountryType) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Country details</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name
            </Heading>
            <Text pt="2" fontSize="md">
              {country?.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Capital
            </Heading>
            <Text pt="2" fontSize="md">
              {country?.capital}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Currency
            </Heading>
            <Text pt="2" fontSize="md">
              {country?.currency}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
