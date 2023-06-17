import { useQuery } from "@apollo/client";
import { Center, Spinner } from "@chakra-ui/react";

import { DashBoardDetails } from "@/components/dashboard-details/dashboard-details.component";
import { Error } from "@/components/error/error.component";
import { PageContainer } from "@/components/ui";
import { countriesQuery } from "@/lib/queries/countries.query";
import { CountriesType } from "@/lib/types/countries-query.type";

export default function Dashboard() {
  const { data, loading, error } = useQuery<CountriesType>(countriesQuery);

  if (error) {
    return (
      <PageContainer h="90vh">
        <Center>
          <Error />
        </Center>
      </PageContainer>
    );
  }

  if (loading) {
    return (
      <PageContainer>
        <Center h="90vh">
          <Spinner />
        </Center>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {!loading && <DashBoardDetails countries={data?.countries} />}
    </PageContainer>
  );
}
