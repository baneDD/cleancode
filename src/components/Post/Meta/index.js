import React from 'react';
import { Container, MetaParagraph } from './style';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Meta = ({ date }) => (
  <Container>
    <MetaParagraph>
      {`Published ${new Intl.DateTimeFormat('en-US', options).format(
        Date.parse(date)
      )}`}
    </MetaParagraph>
  </Container>
);

export default Meta;
