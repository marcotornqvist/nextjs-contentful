import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.CONTENTFUL_GRAPHQL_URL!, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
  },
});

export const fetcher = <T>(operation: string, variables: T | undefined) => {
  return client.request(operation, variables);
};
