import { getBlogsQuery } from "operations/queries/getBlogs";
import { fetcher } from "@utils/graphql-request-client";
import { NextPage } from "next";
import { styled } from "@stitches/react";
import useSWR from "swr";
import Search from "@components/Search";
import Filters from "@components/Filters";
import { useState } from "react";

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

// KEEP IN MIND: https://www.contentful.com/developers/docs/references/graphql/#/introduction/query-complexity-limits

interface IVariables {
  tags: string[];
  search: string;
  id: string;
}

// TODO: Multi-selection filters for tags
// TODO: Do the same in the REST version

const GraphqlVersion: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | undefined>();
  const tags = ["art", "gaming"];
  const variables: IVariables = {
    // tags: selectedTag ? [selectedTag] : [],
    tags,
    search: "sport",
    id: "1mdvXZuj5eWZZHGFeUftvb",
  };

  // Source on why items can't be fetched any other way than this: https://www.contentful.com/blog/2021/06/15/filter-entries-by-linked-references-in-graphql-api/

  const { data, error } = useSWR<any, any, [string, IVariables]>(
    [getBlogsQuery, variables],
    fetcher
  );

  console.log(data);

  return (
    <LandingSection>
      <Container>
        <Wrapper>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Filters setSelectedTag={setSelectedTag} />
        </Wrapper>
        {/* {blogs.map((item) => (
          <div key={item.id} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 16 }}>{item.title}</h3>
            <Image
              src={"https:" + item.thumbnail}
              alt="Picture of the author"
              layout="responsive"
              width={500}
              height={365}
              priority
            />
          </div>
        ))} */}
      </Container>
    </LandingSection>
  );
};

export default GraphqlVersion;
