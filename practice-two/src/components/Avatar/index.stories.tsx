import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from '.';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const Default = Template.bind({});
Default.args = {
  size: 'small',
};

const Circle = Template.bind({});
Circle.args = {
  url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
  size: 'small',
  styles: 'circle',
};

const Large = Template.bind({});
Large.args = {
  url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
  size: 'large',
};

export { Default, Circle, Large };
