import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Layout from '../global/Layout';
import HorizontalList from '../components/HorizontalList';
import { DARK_GREY } from '../global/Theme';

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Anonymous Pro', 'Menlo', 'Monaco', 'Lucida Console',
    'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
    'Courier New', monospace;
  font-weight: 500;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: ${DARK_GREY};
  margin-top: 60px;
`;

const IndexTemplate = () => (
  <Layout>
    <Page>
      <HomeWrapper>
        <Heading>Bane Debeljević</Heading>
        <HorizontalList items={['Developer', 'Architect', 'Leader']} />
      </HomeWrapper>
    </Page>
  </Layout>
);

export default IndexTemplate;
