import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from '.';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const Default = Template.bind({});
Default.args = {
  username: 'Username',
  size: 'small',
};

const Circle = Template.bind({});
Circle.args = {
  username: 'Username',
  size: 'small',
  styles: 'circle',
};

const Medium = Template.bind({});
Medium.args = {
  username: 'Username',
  size: 'medium',
};

const Large = Template.bind({});
Large.args = {
  username: 'Username',
  size: 'large',
};

const Image = Template.bind({});
Image.args = {
  url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
  size: 'small',
  styles: 'circle',
};

export { Default, Circle, Medium, Large, Image };
