import { FC } from "react";
import { client } from "@utils/graphql-request-client";
import {
  Get_Blog_PathsDocument,
  Get_Blog_PathsQuery,
  Get_Single_BlogDocument,
  Get_Single_BlogQuery,
  Get_Single_BlogQueryVariables,
} from "generated/graphql";
import { GetStaticProps } from "next";
import { Container } from "pages";
import generateRandomNumber from "@utils/generateRandomNumber";

// https://tsh.io/blog/ssr-vs-ssg-in-nextjs/#:~:text=When%20to%20use%20SSG%3F,or%20provide%20excellent%20SEO%20capabilities.
// https://swr.vercel.app/docs/with-nextjs

export const getStaticPaths = async () => {
  const { blogCollection } = await client.request<Get_Blog_PathsQuery>(
    Get_Blog_PathsDocument
  );

  const paths = blogCollection?.items.map(
    (item) =>
      item && {
        params: { slug: item.slug },
      }
  );

  // console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let data;
  const slug = context.params?.slug;

  if (slug && typeof slug === "string") {
    data = await client.request<
      Get_Single_BlogQuery,
      Get_Single_BlogQueryVariables
    >(Get_Single_BlogDocument, { slug });
  }

  const randomNumber = generateRandomNumber();

  return {
    props: {
      data,
      randomNumber,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 30, // In seconds
  };
};

// TODO: Maybe implement "on demand revalidation" - https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation

interface IProps {
  data: Get_Single_BlogQuery;
  randomNumber: number;
}

const BlogISR: FC<IProps> = ({ data, randomNumber }) => {
  return (
    <div>
      <Container>
        <h1>{randomNumber}</h1>
        <br />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </div>
  );
};

export default BlogISR;
