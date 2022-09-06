import { FC } from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import * as LabelPrimitive from "@radix-ui/react-label";

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 16,
  fontWeight: 500,
  color: "black",
  userSelect: "none",
});

// Exports
const Label = StyledLabel;

// Your app...
const Flex = styled("div", { display: "flex" });
const Input = styled("input", {
  all: "unset",
  width: 200,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: "2rem",
  lineHeight: 1,
  color: "black",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

interface IProps {
  search: string;
  setSearch: (search: string) => void;
}

const Search: FC<IProps> = ({ search, setSearch }) => {
  return (
    <Flex
      css={{ marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}
    >
      <Label htmlFor="search" css={{ lineHeight: "32px", marginRight: 16 }}>
        Search
      </Label>
      <Input
        type="text"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </Flex>
  );
};

export default Search;
