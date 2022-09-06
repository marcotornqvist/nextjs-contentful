import { NextPage } from "next";
import { styled } from "@stitches/react";
import { useState } from "react";
import { StyledBlog } from "@components/landing/BlogItem";
import { fetcher } from "@utils/rest-fetcher";
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

export const Container = styled("div", {
  margin: "0 auto",
  maxWidth: 768,
});

const Landing: NextPage = () => {
  const [search, setSearch] = useState("");

  const { data } = useSWR({ url: null, search }, fetcher);

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
            <Link href={`/blog/static/${item.fields.slug}`}>
              <a>
                <h3>{item.fields.title}</h3>
              </a>
            </Link>
          </StyledBlog>
        ))}
      </Container>
    </LandingSection>
  );
};

export default Landing;
