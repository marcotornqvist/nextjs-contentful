import { client, fetcher } from "@utils/graphql-request-client";
import { randomNumber } from "@utils/randomNumber";
import {
  Get_Blog_PathsDocument,
  Get_Blog_PathsQuery,
  Get_Single_BlogDocument,
  Get_Single_BlogQuery,
  Get_Single_BlogQueryVariables,
} from "generated/graphql";
import { GetServerSideProps, GetStaticProps } from "next";
import { FC } from "react";

// https://tsh.io/blog/ssr-vs-ssg-in-nextjs/#:~:text=When%20to%20use%20SSG%3F,or%20provide%20excellent%20SEO%20capabilities.
// https://swr.vercel.app/docs/with-nextjs

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data;
  const slug = context.params?.slug;

  if (slug && typeof slug === "string") {
    data = await client.request<
      Get_Single_BlogQuery,
      Get_Single_BlogQueryVariables
    >(Get_Single_BlogDocument, { slug });
  }

  return {
    props: {
      data,
      randomNumber: randomNumber(),
    },
  };
};

interface IProps {
  data: Get_Single_BlogQuery;
  randomNumber: number;
}

const BlogSSR: FC<IProps> = ({ data, randomNumber }) => {
  return (
    <div>
      <h1>{randomNumber}</h1>
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BlogSSR;
