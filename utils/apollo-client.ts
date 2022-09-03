/*
  Apollo client version, instead of graphql-request. Remember to install apollo-client.
*/

export {};
// import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

// const TOKEN = process.env.CONTENTFUL_ACCESS_KEY;
// const SPACE = process.env.CONTENTFUL_SPACE_ID;
// const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

// const client = new ApolloClient({
//   uri: process.env.CONTENTFUL_GRAPHQL_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
//   },
//   cache: new InMemoryCache(),
// });

// async function getAllBlogs() {
//   const { data } = await client.query({
//     query: gql`
//       query getAllBlogs {
//         # add your query
//         blogCollection {
//           items {
//             title
//             sys {
//               id
//             }
//           }
//         }
//         blog(id: "31P2EgoXs9R2e466Fl1Cev") {
//           title
//         }
//       }
//     `,
//   });

//   return {
//     blogs: data.blogCollection.items,
//     blog: data.blog,
//   };
// }

// export default client;
