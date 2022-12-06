import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as FilterIcon } from '@/assets/images/icons/filter.svg';
import { ReactComponent as DeleteIcon } from '@/assets/images/icons/xmark.svg';

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
  adornments: 'endAdornments',
  label: 'Romance',
  endAdornments: <DeleteIcon />,
};

const Filter = Template.bind({});
Filter.args = {
  ...Filter.args,
  size: 'small',
  adornments: 'startAdornments',
  label: 'filter',
  startAdornments: <FilterIcon />,
};

export { Deletable, Filter };
