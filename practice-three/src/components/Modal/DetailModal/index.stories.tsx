import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import DetailModal from ".";

import { book } from "../../../constants/mockData";

export default {
  title: "DetailModal",
  component: DetailModal,
} as ComponentMeta<typeof DetailModal>;

const Template: ComponentStory<typeof DetailModal> = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleCloseModal = (): void => {
    console.log("Closing modal");
  };

  const handleCloseByKeyboard = (event: KeyboardEvent): void => {
    console.log(`Keyboard event: ${event.key}`);
  };

  const handleToggleTheme = (): void => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <DetailModal
      book={book}
      onCloseModal={handleCloseModal}
      onCloseByKeyboard={handleCloseByKeyboard}
      onToggleTheme={handleToggleTheme}
      isDarkTheme={isDarkTheme}
    />
  );
};

export const Default = Template.bind({});
