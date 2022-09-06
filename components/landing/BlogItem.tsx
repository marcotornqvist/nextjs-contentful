import { styled } from "@stitches/react";
import { FC } from "react";
import { Get_BlogsQuery } from "generated/graphql";
import Image from "next/image";
import Link from "next/link";

export const StyledBlog = styled("div", {});

// Exports
// export const PostGroup = StyledPost;
// export const PostTitle = StyledTitle;

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
      <Link href={`/blog/${slug}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </StyledBlog>
  );
};

export default BlogItem;
