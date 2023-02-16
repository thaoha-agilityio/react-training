import {
  CategoriesContext,
  ICategoriesContext,
} from "@/contexts/CategoriesContext";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { categories } from "@/constants/mockData";
import SubHeader from ".";

export default {
  title: "SubHeader",
  component: SubHeader,
  argTypes: {
    ids: {
      defaultValue: ["1", "2"],
    },
  },
} as ComponentMeta<typeof SubHeader>;

const context = {
  getCategoryById: (ids: string[]) =>
    categories?.filter((item) => ids?.some((id) => id === item.id)),
};

const Template: ComponentStory<typeof SubHeader> = (args) => (
  <CategoriesContext.Provider value={context as unknown as ICategoriesContext}>
    <SubHeader {...args} />;
  </CategoriesContext.Provider>
);

const Default = Template.bind({});

export { Default };
