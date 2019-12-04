import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import Layout from '../global/Layout'
import HorizontalList from '../components/HorizontalList'
import { DARK_GREY, SANS } from '../global/Theme'

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${SANS};
  font-weight: 500;
`

const Heading = styled.h1`
  color: ${DARK_GREY};
  margin-top: 60px;
`

const IndexTemplate = () => (
  <Layout>
    <Page>
      <HomeWrapper>
        <Heading>Bane Debeljević</Heading>
        <HorizontalList items={['Developer', 'Architect', 'Leader']} />
      </HomeWrapper>
    </Page>
  </Layout>
)

export default IndexTemplate
