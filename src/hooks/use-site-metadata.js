import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            title
            url
            description
            author {
              name
              bio
              social {
                twitter
                linkedin
                github
                codepen
                codesandbox
              }
            }
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
