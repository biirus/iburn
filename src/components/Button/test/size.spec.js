import React from "react";

import Button from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Button.InnerComponent;

describe("<Button />", () => {
  it("should render a block button", () => {
    const wrapper = shallow(
      <Component classes={classes} size="block">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("block")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a inline button", () => {
    const wrapper = shallow(
      <Component classes={classes} size="inline">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("inline")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a compact button", () => {
    const wrapper = shallow(
      <Component classes={classes} size="compact">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("compact")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
