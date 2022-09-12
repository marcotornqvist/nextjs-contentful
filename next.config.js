/** @type {import('next').NextConfig} */
// const constants = require("next/constants");
const path = require("path");

const nextConfig = (phase, isServer) => {
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);

  // Checks if environment is in development or something else (E.g. production)
  // const isDev = phase === constants.PHASE_DEVELOPMENT_SERVER;

  // const AUTH_URL = isDev
  //   ? "http://localhost:4001/auth"
  //   : process.env.NEXT_PUBLIC_AUTH_URL;
  // ^(en\/home|etusivu)$

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN:
        process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
      CONTENTFUL_GRAPHQL_URL: process.env.CONTENTFUL_GRAPHQL_URL,
      REVALIDATE_SECRET_TOKEN: process.env.REVALIDATE_SECRET_TOKEN,
    },
    images: {
      domains: ["images.ctfassets.net"], //Domain of image host
    },
    i18n: {
      locales: ["en", "fi", "sv"],
      defaultLocale: "en",
      localeDetection: false,
    },
    async rewrites() {
      if (isServer) {
        const rewrites = await require("./utils/generateRewrites");
        console.log(rewrites);
        return rewrites;
      }
    },
    async redirects() {
      return [
        {
          source: "/landing",
          destination: "/404",
          permanent: true,
        },
      ];
    },
  };
};

module.exports = nextConfig;
