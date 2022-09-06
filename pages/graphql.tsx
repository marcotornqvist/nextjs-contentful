import { fetcher } from "@utils/graphql-request-client";
import { NextPage } from "next";
import { styled } from "@stitches/react";
import { useEffect, useMemo, useState } from "react";
import { client } from "@utils/contentfulClient";
import { ICategory } from "types";
import useSWR from "swr";
import Search from "@components/landing/Search";
import Selections from "@components/landing/Selections";
import {
  Get_BlogsDocument,
  Get_BlogsQuery,
  Get_BlogsQueryVariables,
} from "generated/graphql";
import BlogItem from "@components/landing/BlogItem";

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
// Source on why items can't be fetched any other way than this: https://www.contentful.com/blog/2021/06/15/filter-entries-by-linked-references-in-graphql-api/

const Graphql: NextPage = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await client.getTags();

      const categoriesWithSelectedProperty: ICategory[] = result.items.map(
        (item) => ({
          ...item,
          selected: false,
        })
      );

      setCategories(categoriesWithSelectedProperty);
    };

    fetchCategories();
  }, []);

  // Returns all categories with selected value of true
  const selectedCategories: string[] = useMemo(
    () =>
      categories
        .map((item) => (item.selected === true ? item.sys.id : undefined))
        .filter((el): el is string => el !== undefined),
    [categories]
  );

  const { data, error } = useSWR<Get_BlogsQuery, Get_BlogsQueryVariables>(
    [Get_BlogsDocument, { search, selectedCategories, title: "" }],
    fetcher
  );

  return (
    <LandingSection>
      <Container>
        <Wrapper>
          <Search search={search} setSearch={setSearch} />
          <Selections
            categories={categories}
            setCategories={setCategories}
            selectedCategories={selectedCategories}
          />
        </Wrapper>
        {data?.blogCollection?.items.map(
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
        )}
      </Container>
    </LandingSection>
  );
};

export default Graphql;
