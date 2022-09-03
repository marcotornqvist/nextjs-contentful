import { styled } from "@stitches/react";
import { FC } from "react";
import { Post } from "../types";
import { violet } from "@radix-ui/colors";

const StyledPost = styled("div", {
  display: "flex",
  padding: "1rem",
  borderRadius: "3px",
  backgroundColor: violet.violet9,
});

const StyledTitle = styled("h4", {
  fontWeight: 400,
  color: "white",
});

// Exports
export const PostGroup = StyledPost;
export const PostTitle = StyledTitle;

const PostItem: FC<Post> = ({ userId, id, title, body }) => {
  return (
    <PostGroup css={{ marginBottom: "1rem" }}>
      <PostTitle>{title}</PostTitle>
    </PostGroup>
  );
};

export default PostItem;
