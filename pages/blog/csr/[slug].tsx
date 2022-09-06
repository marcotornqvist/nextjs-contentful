import { fetcher } from "@utils/graphql-request-client";
import {
  Get_Single_BlogDocument,
  Get_Single_BlogQuery,
  Get_Single_BlogQueryVariables,
} from "generated/graphql";
import { useRouter } from "next/router";
import useSWR from "swr";

const BlogCSR = () => {
  const { query } = useRouter();

  const { data } = useSWR<Get_Single_BlogQuery, Get_Single_BlogQueryVariables>(
    [Get_Single_BlogDocument, { slug: query.slug }],
    fetcher
  );

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BlogCSR;
