import { Box, Center } from "@chakra-ui/react";

import { PageContainer } from "@/components/ui/page-container/page-container.component";
import { UserProfileDetails } from "@/components/user-profile-details/user-profile-details.component";

export default function Profile() {
  return (
    <PageContainer>
      <Center>
        <Box w={{ base: "100%", md: "50%" }}>
          <UserProfileDetails />
        </Box>
      </Center>
    </PageContainer>
  );
}
