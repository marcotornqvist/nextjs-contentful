import { FC, useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { ICategoryFields } from "../@types/generated/contentful";
import { ICategoryState } from "../types";
import { client } from "../utils/contentfulClient";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const StyledGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  width: 24,
  height: 24,
  borderRadius: "100%",
  boxShadow: `0 3px 12px ${blackA.blackA6}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",

  "&::after": {
    content: '""',
    display: "block",
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: violet.violet11,
  },
});

// Exports
export const RadioGroup = StyledGroup;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;

// Your app...
const Flex = styled("div", { display: "flex" });

const Label = styled("label", {
  color: "black",
  fontSize: "1rem",
  lineHeight: 1,
  userSelect: "none",
  paddingLeft: "1rem",
});

interface IProps {
  setSelectionId: (selectionId: string | undefined) => void;
}

const Filters: FC<IProps> = ({ setSelectionId }) => {
  const [categories, setCategories] = useState<ICategoryState[]>([]);
  // const router = useRouter();
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   if (router.isReady) {
  //     // Code using query
  //     setIsReady(true);
  //   }
  // }, [router.isReady]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await client.getEntries<ICategoryFields>({
        content_type: "category",
      });

      const arrayOfCategories = result.items.map((item) => ({
        title: item.fields.title,
        id: item.sys.id,
      }));

      setCategories(arrayOfCategories);
    };

    fetchCategories();
  }, []);

  return (
    <form className="filters">
      <RadioGroup
        defaultValue="Default"
        aria-label="View density"
        onValueChange={(id: string) =>
          setSelectionId(id !== "Default" ? id : undefined)
        }
      >
        <Flex css={{ margin: "0 2rem 0 0", alignItems: "center" }}>
          <RadioGroupRadio value="Default" id="default">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="default">Default</Label>
        </Flex>
        {categories.map((item) => (
          <Flex
            key={item.id}
            css={{ margin: "0 2rem 0 0", alignItems: "center" }}
          >
            <RadioGroupRadio value={item.id} id={item.title}>
              <RadioGroupIndicator />
            </RadioGroupRadio>
            <Label htmlFor={item.title}>{item.title}</Label>
          </Flex>
        ))}
      </RadioGroup>
    </form>
  );
};

export default Filters;
