import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import { Layout } from "@/components/ui";
import client from "@/lib/http/apollo-client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Leo Demo</title>
        <meta name="description" content="Leo Demo App" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <SessionProvider session={session}>
          <ApolloProvider client={client}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
