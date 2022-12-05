import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardItem from '.';

export default {
  title: 'CardItem',
  component: CardItem,
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => <CardItem {...args} />;

const Default = Template.bind({});
Default.args = {
  id: '1',
  name: 'Taking Things Quietly',
  avatar: 'http://digital.library.lse.ac.uk/objects/lse:dun949mif/view',
  author: 'Francis ',
  published: '1990',
};

export { Default };
