import { NextPage } from "next";
import { styled } from "@stitches/react";
import { useState } from "react";
import { StyledBlog } from "@components/landing/BlogItem";
import { fetcher } from "@utils/rest-fetcher";
import { Container } from "pages";
import { client } from "@utils/contentfulClient";
import { StyledList, StyledListItem } from "@components/layout/Navbar";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import Search from "@components/landing/Search";

const Wrapper = styled("div", {
  alignItems: "center",
  paddingBottom: "1.5rem",
});

const LandingSection = styled("section", {
  padding: "1.5rem 0",
});

const Landing: NextPage = () => {
  const [search, setSearch] = useState("");

  const { data } = useSWR({ url: null, search }, async () => {
    const result = await client.getEntries<any>({
      content_type: "blog",
      "fields.title[match]": search,
      // "metadata.tags.sys.id[in]": selectedCategories.join(","),
      // limit: 1, // returns 1 result
      // skip: 100 // skips the 100 first
    });

    return result;
  });

  // Using fetcher function
  // const { data } = useSWR({ url: null, search }, fetcher);

  return (
    <LandingSection>
      <Container>
        <Wrapper>
          <Search search={search} setSearch={setSearch} />
        </Wrapper>
        {data?.items.map((item: any) => (
          <StyledBlog key={item.sys.id} style={{ marginBottom: "1.5rem" }}>
            {item.fields.thumbnail.fields.file.url && (
              <Image
                src={"https:" + item.fields.thumbnail.fields.file.url}
                alt="thumbnail"
                layout="responsive"
                width={500}
                height={365}
                priority
              />
            )}
            <h3 style={{ paddingTop: "1rem", marginBottom: "1rem" }}>
              {item.fields.title}
            </h3>
            <StyledList>
              <StyledListItem>
                <Link href={`/blog/csr/${item.fields.slug}`}>
                  <a>CSR</a>
                </Link>
              </StyledListItem>
              <StyledListItem>
                <Link href={`/blog/ssg/${item.fields.slug}`}>
                  <a>SSG</a>
                </Link>
              </StyledListItem>
              <StyledListItem>
                <Link href={`/blog/csr/${item.fields.slug}`}>
                  <a>CSR</a>
                </Link>
              </StyledListItem>
              <StyledListItem>
                <Link href={`/blog/ssr/${item.fields.slug}`}>
                  <a>SSR</a>
                </Link>
              </StyledListItem>
            </StyledList>
          </StyledBlog>
        ))}
      </Container>
    </LandingSection>
  );
};

export default Landing;
