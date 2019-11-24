/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, ItemList, Item } from './style';

const HorizontalList = ({ items }) => (
  <Container>
    <ItemList>
      {items
        && items.map((item, index) => (
          <Item key={`${index}_${item}`}>{item}</Item>
        ))}
    </ItemList>
  </Container>
);

export default HorizontalList;
