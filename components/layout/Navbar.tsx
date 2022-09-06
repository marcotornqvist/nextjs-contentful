import { styled } from "@stitches/react";
import { Container } from "pages";
import Link from "next/link";

const StyledNavbar = styled("nav", {
  paddingTop: "1.5rem",
  marginBottom: "1.5rem",
});

export const StyledList = styled("ul", {
  display: "flex",
});

export const StyledListItem = styled("li", {
  marginRight: "1rem",
});

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <StyledList>
          <StyledListItem>
            <Link href="/">
              <a>GraphQL Blogs</a>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/rest">
              <a>REST Blogs</a>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/blog/csr/why-its-called-football-and-not-soccer">
              <a>CSR</a>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/blog/ssg/why-its-called-football-and-not-soccer">
              <a>SSG</a>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/blog/ssr/why-its-called-football-and-not-soccer">
              <a>SSR</a>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/blog/isr/why-its-called-football-and-not-soccer">
              <a>ISR</a>
            </Link>
          </StyledListItem>
        </StyledList>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;