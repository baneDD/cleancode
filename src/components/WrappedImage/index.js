import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const WrappedImage = ({ src, alt, className }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  // Let's go ahead and find the image we're looking for
  const {
    node: {
      childImageSharp: { fluid },
    },
  } = images.edges.find((image) => image.node.relativePath === src);

  return <Img fluid={fluid} alt={alt} className={className} width="200px" />;
};

export default WrappedImage;
