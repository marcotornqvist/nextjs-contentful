import { FC } from "react";
import { ICategory } from "../types";
import { CheckIcon } from "@radix-ui/react-icons";
import { violet, blackA } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const StyledSelections = styled("div", {
  display: "flex",
  alignItems: "center",
});

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: "white",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 3px 9px ${blackA.blackA5}`,
  "&:hover": { backgroundColor: violet.violet3 },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  color: violet.violet11,
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

// Your app...
const Flex = styled("div", { display: "flex" });
const Label = styled("label", {
  color: "black",
  fontSize: "1rem",
  lineHeight: 1,
  userSelect: "none",
});

interface IProps {
  categories: ICategory[];
  selectedCategories: string[];
  setCategories: (categories: ICategory[]) => void;
}

const Selections: FC<IProps> = ({
  categories,
  setCategories,
  selectedCategories,
}) => {
  const handleSelectedCategories = (name: string) => {
    // Toggles the clicked items boolean value from true to false or vice versa
    const newCategories: ICategory[] = categories.map((item) =>
      item.name === name ? { ...item, selected: !item.selected } : item
    );

    setCategories(newCategories);
  };

  const resetCategories = () => {
    const result = categories.map((item) => ({ ...item, selected: false }));
    setCategories(result);
  };

  return (
    <StyledSelections>
      <Flex css={{ alignItems: "center" }}>
        <Checkbox
          id="default"
          onCheckedChange={resetCategories}
          checked={selectedCategories.length < 1}
          disabled={selectedCategories.length < 1}
        >
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        <Label css={{ paddingLeft: "1rem" }} htmlFor="default">
          Default
        </Label>
      </Flex>
      {categories.map((item) => (
        <Flex
          key={item.sys.id}
          css={{ alignItems: "center", marginLeft: "1.5rem" }}
        >
          <Checkbox
            id={item.name}
            onCheckedChange={() => handleSelectedCategories(item.name)}
            checked={item.selected}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>
          <Label css={{ paddingLeft: "1rem" }} htmlFor={item.name}>
            {item.name}
          </Label>
        </Flex>
      ))}
    </StyledSelections>
  );
};

export default Selections;
