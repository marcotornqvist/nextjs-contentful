import { useEffect } from "react";
import { ICategoryFields } from "../../@types/generated/contentful";
import { client } from "../../utils/contentfulClient";

const Blog = () => {
  useEffect(() => {
    const fetchCategories = async () => {
      const singleResult = await client.getEntry<ICategoryFields>(
        "3btfrxKgNTkilNFUVVDbwu"
      );

      console.log(singleResult);
    };

    fetchCategories();
  }, []);

  return <div>Blog</div>;
};

export default Blog;
