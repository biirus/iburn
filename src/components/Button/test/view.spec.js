import React from "react";

import Button from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Button.InnerComponent;

describe("<Button />", () => {
  it("should render a thin button", () => {
    const wrapper = shallow(
      <Component classes={classes} view="thin">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("thin")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a link button", () => {
    const wrapper = shallow(
      <Component classes={classes} view="link">
        Button content
      </Component>
    );

    expect(wrapper.hasClass("link")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
