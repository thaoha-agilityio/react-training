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

const Square = Template.bind({});
Square.args = {
  url: 'https://kbimages1-a.akamaihd.net/bc050d09-4422-4be0-bda6-49941b0cae5e/1200/1200/False/silence-of-the-lambs.jpg',
  styles: 'square',
};

const Large = Template.bind({});
Large.args = {
  url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
  size: 'large',
};

export { Default, Circle, Square, Large };
