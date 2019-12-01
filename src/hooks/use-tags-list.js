import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { tags } = useStaticQuery(
    graphql`
      query TagsListQuery {
        tags: allMarkdownRemark(
          filter: {
            frontmatter: { template: { eq: "post" }, draft: { ne: true } }
          }
        ) {
          group(field: frontmatter___tags) {
            value: fieldValue
            count: totalCount
          }
        }
      }
    `
  );

  return tags.group;
};

export default useTagsList;
