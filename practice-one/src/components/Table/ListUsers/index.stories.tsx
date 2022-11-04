import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IUser } from '../../../types/IUser';
import { ROLE, PROJECT, STATUS } from '../../../constants/user';
import ListUser from '.';

export default {
  title: 'ListUser',
  component: ListUser,
} as ComponentMeta<typeof ListUser>;

const dataUser: IUser[] = [
  {
    id: '1',
    name: 'Patrick Roland',
    email: '@Patrick',
    projects: [
      {
        id: '1',
        projectName: PROJECT.LIBRA,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
      {
        id: '2',
        projectName: PROJECT.LIBRA,
        role: ROLE.DESIGNER,
        status: STATUS.IN_PROGRESS,
      },
    ],
    avatar:
      'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
  },
];

const Template: ComponentStory<typeof ListUser> = (args) => <ListUser {...args} />;

const Default = Template.bind({});
Default.args = {
  list: dataUser,
};

export { Default };
