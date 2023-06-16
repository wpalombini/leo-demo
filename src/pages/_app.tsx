import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "@/components/ui";

export default function App({ Component, pageProps }: AppProps) {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
