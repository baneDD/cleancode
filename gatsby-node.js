exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               slug
//               template
//             }
//           }
//         }
//       }
//     }
//   `);

//   data.allMarkdownRemark.edges.forEach((edge) => {
//     const { slug, template } = edge.node.frontmatter;
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/${template}-template.js`),
//       context: { slug },
//     });
//   });
// };
