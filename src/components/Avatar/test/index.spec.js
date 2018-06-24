import React from "react";

import Avatar from "../index";
import styles from "../styles";

const componentClasses = classes(styles);
const Component = Avatar.InnerComponent;

describe("<Avatar />", () => {
  it("should render Avatar", () => {
    const wrapper = shallow(
      <Component classes={componentClasses}>IB</Component>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should compose passed class names", () => {
    const actual = shallow(
      <Component classes={componentClasses} className="customClass">
        IB
      </Component>
    );

    expect(actual.prop("className")).toBe("root customClass");
  });

  it("should render image instead of children if `src` prop is passed", () => {
    const wrapper = shallow(
      <Component classes={componentClasses} src="https://google.com">
        IB
      </Component>
    );

    expect(wrapper.find(".img").exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render image instead children if `src` prop is not passed", () => {
    const wrapper = shallow(
      <Component classes={componentClasses}>IB</Component>
    );

    expect(wrapper.find(".img").exists()).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });
});
