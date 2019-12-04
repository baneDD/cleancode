import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageCaption from '.';

const Content = () => (
  <>
    {'Photo by '}
    <a href="https://unsplash.com/@scottwebb">Scott Webb</a>
    {' on '}
    <a href="https://unsplash.com">Unsplash</a>
  </>
);

storiesOf('ImageCaption', module).add('Default', () => (
  <ImageCaption>
    <Content />
  </ImageCaption>
));
