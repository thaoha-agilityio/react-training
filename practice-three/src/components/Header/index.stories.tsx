import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChangeEvent } from "react";

import Header from ".";

export default {
  title: "Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const LightTheme = Template.bind({});
LightTheme.args = {
  isDarkTheme: false,
  onToggleTheme: () => { },
  onChange: (event: ChangeEvent<HTMLInputElement>) => { },
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  isDarkTheme: true,
  onToggleTheme: () => { },
  onChange: (event: ChangeEvent<HTMLInputElement>) => { },
};