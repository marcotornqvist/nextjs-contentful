import { fetcher } from "@utils/graphql-request-client";
import {
  Get_Single_BlogDocument,
  Get_Single_BlogQuery,
  Get_Single_BlogQueryVariables,
} from "generated/graphql";
import { useRouter } from "next/router";
import { Container } from "pages";
import { client } from "@utils/contentfulClient";
import generateRandomNumber from "@utils/generateRandomNumber";
import useSWR from "swr";

const BlogCSR = () => {
  const { query } = useRouter();
  const { data } = useSWR<Get_Single_BlogQuery, Get_Single_BlogQueryVariables>(
    [Get_Single_BlogDocument, { slug: query.slug }],
    fetcher
  );

  const restResult = useSWR({ url: null }, async () => {
    if (data?.blogCollection?.items[0]?.sys.id) {
      const result = await client.getEntry(
        data?.blogCollection?.items[0]?.sys.id
      );

      return result;
    }
  });

  return (
    <div>
      <Container>
        <h1>{generateRandomNumber()}</h1>
        <br />
        <h2>GraphQL RESULT</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <br />
        <h2>REST RESULT</h2>
        <pre>{JSON.stringify(restResult, null, 2)}</pre>
      </Container>
    </div>
  );
};

export default BlogCSR;
