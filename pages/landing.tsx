import { GetStaticProps } from "next";
import { styled } from "@stitches/react";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import { request, gql } from "graphql-request";
import MainLayout from "@components/layout/MainLayout";

const Wrapper = styled("div", {
  alignItems: "center",
  paddingBottom: "1.5rem",
});

const LandingSection = styled("section", {
  padding: "1.5rem 0",
});

export const Container = styled("div", {
  margin: "0 auto",
  maxWidth: 768,
});

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "moi",
    },
  };
};

interface IProps {
  title: string;
}

// TODO: How to get static data for navbar/footer: https://stackoverflow.com/questions/62556627/next-js-fetch-and-maintain-global-data-for-all-components. Might not be the smartest way and should probably be dynamically fetched.

const Landing: NextPageWithLayout<IProps> = ({ title }) => {
  // const query = gql`
  //   {
  //     paths: pathsCollection(locale: "en") {
  //       items {
  //         source
  //         sourceFi: source(locale: "fi")
  //         destination
  //       }
  //     }
  //   }
  // `;

  // request(process.env.CONTENTFUL_GRAPHQL_URL!, query, null, {
  //   Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
  // }).then((data) => console.log(data));

  // const { locale } = useRouter();
  // const { data, error } = useSWR<Get_landing, Get_BlogsQueryVariables>(
  //   [Get_BlogsDocument],
  //   fetcher
  // );

  // En tiedä jos pystyt sanoa tässä vaiheessa mutta tuleeko niistä patheista tämmöisiä?

  return (
    <LandingSection>
      <Container>
        {/* {data?.blogCollection?.items.map(
          (item) =>
            item && (
              <BlogItem
                key={item.sys.id}
                title={item.title}
                slug={item.slug}
                thumbnail={item.thumbnail}
                author={item.author}
                sys={item.sys}
              />
            )
        )} */}
        <h1>Hello from landing</h1>
      </Container>
    </LandingSection>
  );
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout className={"moi"}>{page}</MainLayout>;
};

export default Landing;
