import React from "react";
import { Button } from "@chakra-ui/core";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "ChakraButton",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
  onClick: action("Click handler"),
};

// export const Danger = () => <Button variantColor="red">Danger</Button>;

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
  ...actions("onClick", "onMouseOver"),
};

export const Log = () => (
  <Button variantColor="blue" onClick={() => console.log("Button Clicked")}>
    Log
  </Button>
);
