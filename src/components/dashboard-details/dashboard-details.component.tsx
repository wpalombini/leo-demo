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

import { CountriesType } from "@/lib/types/countries-query.type";

export const DashBoardDetails = ({ countries }: CountriesType) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">List of countries</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {countries?.map((country) => (
            <Box key={country.code}>
              <Heading size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text pt="2" fontSize="md">
                {country.name}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
