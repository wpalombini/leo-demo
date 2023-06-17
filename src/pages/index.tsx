import { Button, Center } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

import { PageContainer } from "@/components/ui/page-container/page-container.component";
import { UserDetails } from "@/components/user-details/user-details.component";
import { useUserStore } from "@/lib/stores/user.store";

import { authOptions } from "./api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      userSession: await getServerSession(req, res, authOptions),
    },
  };
};

export default function Home({ userSession }: { userSession: Session }) {
  const { push } = useRouter();
  const { name, title } = useUserStore();
  const hasUserDetails = name && title;
  const isSignedIn = !!userSession;

  useEffect(() => {
    if (isSignedIn && hasUserDetails) {
      push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, title]);

  return (
    <PageContainer h="90vh">
      {isSignedIn && !hasUserDetails && <UserDetails />}
      {!isSignedIn && (
        <Center>
          <Button onClick={() => signIn()}>Start by logging in</Button>
        </Center>
      )}
    </PageContainer>
  );
}
