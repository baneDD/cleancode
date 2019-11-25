import React from 'react';
import styled from 'styled-components';

import Layout from '../global/Layout';
import Navigation from '../components/Navigation';
import HorizontalList from '../components/HorizontalList';
import { DARK_GREY } from '../global/Theme';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: ${DARK_GREY};
  margin-top: 60px;
`;

const IndexPage = () => (
  <Layout>
    <Page>
      <Navigation />
      <Heading>Bane Debeljević</Heading>
      <HorizontalList items={['Developer', 'Architect', 'Leader']} />
    </Page>
  </Layout>
);

export default IndexPage;
