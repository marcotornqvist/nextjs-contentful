import * as dotenv from "dotenv";
dotenv.config();
import { createClient } from "contentful-management";

// This file is for codegen
const contentfulEnvironment = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  return await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);
};

module.exports = contentfulEnvironment;
