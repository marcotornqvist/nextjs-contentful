import { getBlogsQuery } from "operations/queries/getBlogs";
import { fetcher } from "@utils/graphql-request-client";
import { NextPage } from "next";
import { styled } from "@stitches/react";
import { useEffect, useMemo, useState } from "react";
import { client } from "@utils/contentfulClient";
import { ICategory } from "types";
import Image from "next/image";
import useSWR from "swr";
import Search from "@components/Search";
import Selections from "@components/Selections";

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

interface IVariables {
  search: string;
  selectedCategories: string[];
  id: string;
}

const GraphqlVersion: NextPage = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const id = "1mdvXZuj5eWZZHGFeUftvb";

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

  const { data, error } = useSWR<any, any, [string, IVariables]>(
    [getBlogsQuery, { search, selectedCategories, id }],
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
        {data?.blogCollection.items.map((item: any) => (
          <div key={item.sys.id} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 16 }}>{item.title}</h3>
            <Image
              src={item.thumbnail.url}
              alt="Picture of the author"
              layout="responsive"
              width={500}
              height={365}
              priority
            />
          </div>
        ))}
      </Container>
    </LandingSection>
  );
};

export default GraphqlVersion;
