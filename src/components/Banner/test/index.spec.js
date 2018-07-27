import React from "react";

import Icon from "../../Icon";
import Banner from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Banner.InnerComponent;

describe("<Banner />", () => {
  it("should merge user classes", () => {
    const wrapper = shallow(
      <Component className="customClass" classes={classes}>
        Banner content
      </Component>
    );

    expect(wrapper.prop("className")).toEqual("root customClass");
  });

  it("should render a div with only `label` child", () => {
    const wrapper = shallow(
      <Component classes={classes}>Banner content</Component>
    );

    expect(wrapper.name()).toEqual("div");
    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.childAt(0).prop("className")).toEqual("label");
  });

  it("should render a div with `warning` color <Icon /> and `label` children", () => {
    const wrapper = shallow(
      <Component color="warning" classes={classes}>
        Banner content
      </Component>
    );

    expect(wrapper.name()).toEqual("div");
    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.find("Icon").exists()).toBeTruthy();
    expect(wrapper.prop("className")).toEqual("root warning");
    expect(wrapper.childAt(1).text()).toEqual("Banner content");
  });

  it("should render a div with custom icon and `label` children", () => {
    const wrapper = shallow(
      <Component icon={<Icon label="lock" />} classes={classes}>
        Banner content
      </Component>
    );

    expect(wrapper.name()).toEqual("div");
    expect(wrapper.children().length).toEqual(2);
    expect(wrapper.childAt(0).contains(<Icon label="lock" />)).toBeTruthy();
    expect(wrapper.childAt(1).text()).toEqual("Banner content");
  });

  it("should render a Banner with `color` prop correctly", () => {
    const wrapper = shallow(
      <Component color="warning" classes={classes}>
        Banner content
      </Component>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Banner with custom icon correctly", () => {
    const wrapper = shallow(
      <Component icon={<Icon label="lock" />} classes={classes}>
        Banner content
      </Component>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Banner with only label correctly", () => {
    const wrapper = shallow(
      <Component classes={classes}>Banner content</Component>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
