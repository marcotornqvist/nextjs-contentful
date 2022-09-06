import { styled } from "@stitches/react";
import { FC } from "react";
import { Get_BlogsQuery } from "generated/graphql";
import { StyledList, StyledListItem } from "@components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

export const StyledBlog = styled("div", {});

type Props = NonNullable<
  NonNullable<Get_BlogsQuery["blogCollection"]>["items"][0]
>;

const BlogItem: FC<Props> = ({ title, slug, thumbnail, author }) => {
  return (
    <StyledBlog style={{ marginBottom: "1.5rem" }}>
      {thumbnail?.url && (
        <Image
          src={thumbnail.url}
          alt="thumbnail"
          layout="responsive"
          width={500}
          height={365}
          priority
        />
      )}
      <h3 style={{ paddingTop: "1rem", marginBottom: "1rem" }}>{title}</h3>
      <StyledList>
        <StyledListItem>
          <Link href={`/blog/csr/${slug}`}>
            <a>CSR</a>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href={`/blog/ssg/${slug}`}>
            <a>SSG</a>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href={`/blog/csr/${slug}`}>
            <a>CSR</a>
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href={`/blog/ssr/${slug}`}>
            <a>SSR</a>
          </Link>
        </StyledListItem>
      </StyledList>
    </StyledBlog>
  );
};

export default BlogItem;
