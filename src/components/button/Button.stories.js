import React from "react";
import Button from "./Button";

//adds entry in side map
export default {
  title: "Form/Control/Button",
  component: Button,
};

//renders actual components
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;