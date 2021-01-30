import { Meta, Story } from '@storybook/react';
import React from 'react';
import Home from './Home';

const meta: Meta = {
  title: 'Home',
  component: Home,
};
export default meta;

const Template: Story = () => <Home />;

export const Default = Template.bind({});
