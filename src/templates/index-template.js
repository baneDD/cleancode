import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Layout from '../global/Layout';
import HorizontalList from '../components/HorizontalList';
import { DARK_GREY, SANS, VERY_SMALL_SCREEN } from '../global/Theme';

const HomeWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${SANS};
  font-weight: 500;

  @media ${VERY_SMALL_SCREEN} {
    height: calc(100vh - 44px);
    width: calc(100vw - 40px);
  }
`;

const Heading = styled.h1`
  margin: 0px;
  color: ${DARK_GREY};
`;

const IndexTemplate = () => (
  <Layout>
    <Page>
      <HomeWrapper>
        <Heading>Bane Debeljević</Heading>
        <HorizontalList items={['Engineer', 'Architect', 'Leader']} />
      </HomeWrapper>
    </Page>
  </Layout>
);

export default IndexTemplate;
