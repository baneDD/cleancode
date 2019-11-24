import React from 'react';
import { storiesOf } from '@storybook/react';

import HorizontalList from '.';

const items = ['first item', 'second item', 'third item'];

storiesOf('Horizontal List', module).add('Default', () => (
  <HorizontalList items={items} />
));
