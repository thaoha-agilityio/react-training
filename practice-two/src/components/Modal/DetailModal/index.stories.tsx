import { ComponentMeta, ComponentStory } from '@storybook/react';

import DetailModal from '.';

const data = {
  id: '1',
  name: 'Taking Things Quietly',
  avatar: 'http://digital.library.lse.ac.uk/objects/lse:dun949mif/view',
  author: 'Francis ',
  description:
    'The serial killer nicknamed Buffalo Bill has been capturing and starving women, then murdering and skinning them. FBI rookie Clarice Starling is assigned to solicit help from imprisoned psychopath Dr Hannibal the Cannibal Lecter, whose insight into the depraved minds of serial killers is second to none.',
  published: 1990,
  publishers: 'Paperback',
};

export default {
  title: 'DetailModal',
  component: DetailModal,
  argTypes: {
    category: {
      book: data,
      onCloseModal: { action: 'click' },
    },
  },
} as ComponentMeta<typeof DetailModal>;

const Template: ComponentStory<typeof DetailModal> = (args) => <DetailModal {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  book: data,
  onCloseModal: () => {
    alert('Close modal');
  },
};

export { Default };
