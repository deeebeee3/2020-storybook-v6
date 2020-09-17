import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";
import { withConsole } from "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

/* Version 5.3 way of using decorator for theming */
/* addDecorator((story) => (
  <ThemeProvider>
    <CSSReset />
    <Box m="4">{story()}</Box>
  </ThemeProvider>
)); */

//Version 6.2 way of using decorator for theming
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
  (Story) => <Center>{Story()}</Center>,
  (Story, context) => withConsole()(Story)(context),
];
