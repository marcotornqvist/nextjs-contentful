/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const path = require("path");

const nextConfig = (phase) => {
  // Checks if environment is in development or something else (E.g. production)
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  // const AUTH_URL = isDev
  //   ? "http://localhost:4001/auth"
  //   : process.env.NEXT_PUBLIC_AUTH_URL;

  return {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN:
        process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
      CONTENTFUL_GRAPHQL_URL: process.env.CONTENTFUL_GRAPHQL_URL,
    },
    images: {
      domains: ["images.ctfassets.net"], //Domain of image host
    },
  };
};

module.exports = nextConfig;
