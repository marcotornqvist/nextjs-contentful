import * as dotenv from "dotenv";
dotenv.config();
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://graphql.contentful.com/content/v1/spaces/nyb9we33lqco": {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
        },
      },
    },
  ],
  documents: ["./operations/**/*.graphql"],
  generates: {
    "./generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
  config: {
    skipGraphQLImport: true,
  },
};

export default config;
