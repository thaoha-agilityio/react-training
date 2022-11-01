import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IUser } from '../../types/IUsers';
import { ROLE, PROJECT, STATUS } from '../../constants/user';
import ListUser from '.';

export default {
  title: 'ListUser',
  component: ListUser,
} as ComponentMeta<typeof ListUser>;

const dataUser: IUser[] = [
  {
    id: '1',
    name: 'user1',
    email: 'use1@gmail.com',
    role: ROLE.DESIGNER,
    project: PROJECT.LIBRA,
    status: STATUS.DONE,
    avatar:
      'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
  },
];

const Template: ComponentStory<typeof ListUser> = (args) => <ListUser {...args} />;

const Default = Template.bind({});
Default.args = {
  ...Default.args,
  list: dataUser,
};

export { Default };
