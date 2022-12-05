import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as DeleteIcon } from '@/assets/images/icons/xmark.svg';
import { ReactComponent as FilterIcon } from '@/assets/images/icons/filter.svg';
import Chip from '.';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    adornments: {
      defaultValue: 'deletable',
      options: ['deletable', 'icon'],
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium'],
    },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

const Deletable = Template.bind({});
Deletable.args = {
  ...Deletable.args,
  size: 'medium',
  adornments: 'deletable',
  isOption: false,
  label: 'Romance',
};

const Filter = Template.bind({});
Filter.args = {
  ...Filter.args,
  size: 'small',
  icon: <FilterIcon />,
  adornments: 'icon',
  isOption: true,
  label: 'filter',
};

export { Deletable, Filter };
