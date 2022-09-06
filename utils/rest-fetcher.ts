import { client } from "./contentfulClient";

export const fetcher = async (variables: any) => {
  const result = await client.getEntries<any>({
    content_type: "blog",
    "fields.title[match]": variables.search,
    // "metadata.tags.sys.id[in]": selectedCategories.join(","),
    // limit: 1, // returns 1 result
    // skip: 100 // skips the 100 first
  });

  return result;
};
