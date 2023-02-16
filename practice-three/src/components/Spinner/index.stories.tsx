import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Spinner } from ".";



export default {
    title: "Spinner",
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />

export const Default = Template.bind({});