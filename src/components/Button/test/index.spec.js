import React from "react";

import Button from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Button.InnerComponent;

describe("<Button />", () => {
  it("should render a button element", () => {
    const wrapper = shallow(
      <Component classes={classes}>Button content</Component>
    );

    expect(wrapper.name()).toEqual("StyledButton");
    expect(wrapper).toMatchSnapshot();
  });

  it("should merge user classes", () => {
    const wrapper = shallow(
      <Component className="customClass" classes={classes}>
        Button content
      </Component>
    );

    expect(wrapper.prop("className")).toEqual("root customClass default");
  });

  it("should be selected when the correct prop is passed", () => {
    const wrapper = shallow(
      <Component selected classes={classes}>
        Button content
      </Component>
    );

    expect(wrapper.hasClass("selected")).toBeTruthy();
  });

  it("should ignore `color` prop when `view` prop is passed", () => {
    const wrapper = shallow(
      <Component color="primary" view="thin" classes={classes}>
        Button content
      </Component>
    );

    expect(wrapper.hasClass("primary")).toBeFalsy();
  });

  it("should past the `rest` props to the root node", () => {
    const wrapper = shallow(
      <Component classes={classes} dataTest="rest prop">
        Button content
      </Component>
    );

    expect(wrapper.prop("dataTest")).toEqual("rest prop");
  });

  it("should return only a <span /> child", () => {
    const wrapper = shallow(<Component classes={classes}>One child</Component>);

    expect(wrapper.childAt(0).name()).toEqual("span");
    expect(wrapper.childAt(0).text()).toEqual("One child");
  });
});
