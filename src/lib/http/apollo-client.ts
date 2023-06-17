import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: process.env.NEXT_PUBLIC_APOLLO_URI as string,
});

export default client;
