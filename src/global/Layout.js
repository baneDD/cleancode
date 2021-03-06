import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import GlobalStyle from './GlobalStyle';

const Layout = ({ title, description, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <title>{title || data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={description || data.site.siteMetadata.description}
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <>{children}</>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
