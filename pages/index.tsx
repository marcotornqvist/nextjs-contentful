import { NextPage } from "next";
import { styled } from "@stitches/react";
import { IBlogFields } from "@generated/contentful";
import { client } from "@utils/contentfulClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import Filters from "@components/Filters";
import Search from "@components/Search";

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

// https://www.youtube.com/watch?v=MbEIGh5cWWI

interface IBlog {
  id: string;
  title: string;
  slug: string;
  thumbnail?: string;
  // author: string;
  // categories: {
  //   title: string;
  // }[];
}

// export const getStaticProps: GetStaticProps = async () => {
//   const result = await client.getEntries<IBlogFields>({
//     content_type: "blog",
//   });

//   const arrayOfBlogs: IBlog[] = result.items.map((item) => ({
//     id: item.sys.id,
//     title: item.fields.title,
//     slug: item.fields.slug,
//     thumbnail: item.fields.thumbnail?.fields.file.url,
//     // author: item.fields.author.fields,
//     // categories: item.fields.categories?.map((item) => ({
//     //   title: item.fields.,
//     // })),
//   }));

//   return {
//     props: {
//       blogs: arrayOfBlogs,
//     },
//   };
// };

const Landing: NextPage = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | undefined>();

  // TODO: Multi-selection filters for tags

  useEffect(() => {
    // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/links-to-entry
    // You can use the all, in, nin, exists, match, gt, gte,lt, lte, ne, near and within
    const fetchBlogs = async () => {
      const result = await client.getEntries<IBlogFields>({
        content_type: "blog",
        "fields.title[match]": searchText,
        // links_to_entry: selectedTag, FIXME: rememember to fix this so that we can fetch blogs by tags
        // limit: 1, // returns 1 result
        // skip: 100 // skips the 100 first
      });

      console.log(result);

      const arrayOfBlogs: IBlog[] = result.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        thumbnail: item.fields.thumbnail?.fields.file.url,
        // author: item.fields.author.fields,
        // categories: item.fields.categories?.map((item) => ({
        //   title: item.fields.,
        // })),
      }));

      setBlogs(arrayOfBlogs);
    };

    fetchBlogs();
  }, [searchText, selectedTag]);

  return (
    <LandingSection>
      <Container>
        <Wrapper>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Filters setSelectedTag={setSelectedTag} />
        </Wrapper>
        {blogs.map((item) => (
          <div key={item.id} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 16 }}>{item.title}</h3>
            <Image
              src={"https:" + item.thumbnail}
              alt="Picture of the author"
              layout="responsive"
              width={500}
              height={365}
              priority
            />
          </div>
        ))}
      </Container>
    </LandingSection>
  );
};

export default Landing;
