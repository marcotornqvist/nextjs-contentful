export const getBlogsQuery = `
  query GET_BLOGS($search: String, $selectedCategories: [String], $id: String!) {
    blogCollection(where: {
      OR: [
        {
          contentfulMetadata: {
            tags: {
              id_contains_some: $selectedCategories
            }
          }
        },
        {
          contentfulMetadata: {
            tags: {
              id_contains_all: $selectedCategories
            }
          }
        }
      ],
      title_contains: $search
    }) {
      items {
        title
        slug
        thumbnail {
          title
          url
        }
        author {
          name
          email
          profileImage {
            title
            url
          }
          sys {
            id
          }
        }
        sys {
          id
        }
      }
    }
    blog(id: $id) {
      title
    }
  }
`;

// export const getBlogsQuery = `
//   query GET_BLOGS($id: String!) {
//     blogCollection {
//       items {
//         title
//         slug
//         thumbnail {
//           title
//           url
//         }
//         author {
//           name
//           email
//           profileImage {
//             title
//             url
//           }
//           sys {
//             id
//           }
//         }
//         body {
//           json
//         }
//         sys {
//           id
//         }
//       }
//     }
//     blog(id: $id) {
//       title
//     }
//   }
// `;

// export const getBlogsQuery = `
//   query GET_BLOGS($categoryIds: [String]) {
//     categoryCollection(where: {
//       sys: { id_in: $categoryIds },
//     }, limit: 25) {
//       items {
//         linkedFrom {
//           blogCollection {
//             items {
//               title
//               slug
//               thumbnail {
//                 title
//                 url
//               }
//               author {
//                 name
//                 email
//                 profileImage {
//                   title
//                   url
//                 }
//                 sys {
//                   id
//                 }
//               }
//               sys {
//                 id
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
