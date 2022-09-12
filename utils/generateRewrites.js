const { request, gql } = require("graphql-request");

const query = gql`
  {
    paths: pathsCollection {
      items {
        source
        sourceFi: source(locale: "fi")
        destination
      }
    }
  }
`;

async function generateRewrites() {
  const { paths } = await request(
    process.env.CONTENTFUL_GRAPHQL_URL,
    query,
    null,
    {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
    }
  );

  const newPaths = [];
  
  paths.items.forEach((item) =>
    newPaths.push(
      { source: item.source, destination: item.destination },
      { source: item.sourceFi, destination: item.destination, locale: false }
    )
  );

  return newPaths;

  // Does the same as above
  // const newPaths = paths.items.map((item) => {
  //   return [
  //     { source: item.source, destination: item.destination },
  //     { source: item.sourceFi, destination: item.destination, locale: false },
  //   ];
  // });

  // const mergedPaths = [].concat.apply([], newPaths);

  // return mergedPaths;
}

module.exports = generateRewrites();
