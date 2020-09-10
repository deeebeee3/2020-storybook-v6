import React from "react";
import Button from "./Button";

//adds entry in side map
export default {
  title: "Form/Control/Button",
  component: Button,
  args: {
    children: "Setting args at Component Level",
  },
};

//renders actual components
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  /* children: "Primary Args", */
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  /* children: <div>Secondary Args</div>, */
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  /* children: "Long Primary Args", */
};
