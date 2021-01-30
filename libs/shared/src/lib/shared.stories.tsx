import React from 'react';
import { Shared, SharedProps } from './shared';

export default {
  component: Shared,
  title: 'Shared',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedProps = {};

  return <Shared />;
};
