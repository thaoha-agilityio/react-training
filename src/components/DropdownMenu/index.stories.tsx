import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropdownMenu from '../DropdownMenu';
import { OPTIONS_ROLE, OPTIONS_PROJECT } from '../../constants/dropdown';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;

const Role = Template.bind({});
Role.args = {
  ...Role.args,
  options: OPTIONS_ROLE,
};

const Project = Template.bind({});
Project.args = {
  ...Project.args,
  options: OPTIONS_PROJECT,
};

export { Role, Project };
