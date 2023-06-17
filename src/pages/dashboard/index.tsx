import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { DashBoardDetails } from "@/components/dashboard-details/dashboard-details.component";
import { DashBoardSearchInput } from "@/components/dashboard-details/dashboard-search-input.component";
import { Error } from "@/components/error/error.component";
import { PageContainer } from "@/components/ui";
import { countryQuery } from "@/lib/queries/country.query";
import { CountryType } from "@/lib/types/country-query.type";

export default function Dashboard() {
  const [countryCode, setCountryCode] = useState("AU");

  const { data, loading, error } = useQuery<CountryType>(countryQuery, {
    variables: { code: countryCode },
  });

  const searchFieldRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    setCountryCode(searchFieldRef.current?.value as string);
  };

  if (error) {
    return (
      <PageContainer h="90vh">
        <Center>
          <Error />
        </Center>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Box py={4}>
        <DashBoardSearchInput
          defaultValue={countryCode}
          handleSearch={handleSearch}
          searchFieldRef={searchFieldRef}
        />
      </Box>
      {loading && (
        <Center h="80vh">
          <Spinner />
        </Center>
      )}
      {!loading && <DashBoardDetails country={data?.country} />}
    </PageContainer>
  );
}
