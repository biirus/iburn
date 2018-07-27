import React from "react";

import Button from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Button.InnerComponent;

describe("<Button />", () => {
  it("should render a default button", () => {
    const wrapper = shallow(
      <Component classes={classes} color="default">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("default")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a primary button", () => {
    const wrapper = shallow(
      <Component classes={classes} color="primary">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("primary")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a warning button", () => {
    const wrapper = shallow(
      <Component classes={classes} color="warning">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("warning")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a error button", () => {
    const wrapper = shallow(
      <Component classes={classes} color="error">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("error")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a info button", () => {
    const wrapper = shallow(
      <Component classes={classes} color="info">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("info")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a success button", () => {
    const wrapper = shallow(
      <Component classes={classes} color="success">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("success")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
