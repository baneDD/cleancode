import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../global/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = () => {
  const { title, description } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={title} description={description}>
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.value}>
              <Link to={`/tag/${kebabCase(tag.value)}/`}>
                {`${tag.value} (${tag.count})`}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
