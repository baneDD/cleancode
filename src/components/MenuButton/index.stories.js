import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import MenuButton from '.';

const MenuButtonWithClickHandling = () => {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => setOpen((old) => !old);

  return (
    <MenuButton
      className={open ? 'open' : ''}
      onClickHandler={onClickHandler}
    />
  );
};

storiesOf('Menu Button', module).add('Default', () => (
  <MenuButtonWithClickHandling />
));
