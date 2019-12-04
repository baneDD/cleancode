/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ResponsiveWrapper, ItemList, Item } from './style';

const HorizontalList = ({ items }) => (
  <ResponsiveWrapper>
    <ItemList>
      {items
        && items.map((item, index) => (
          <Item key={`${index}_${item}`}>{item}</Item>
        ))}
    </ItemList>
  </ResponsiveWrapper>
);

export default HorizontalList;
