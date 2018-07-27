import React from "react";

import ButtonGroup from "../index";
import Button from "../../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = ButtonGroup.InnerComponent;

describe("<ButtonGroup />", () => {
  it("should render a <ButtonGroup /> element", () => {
    const wrapper = shallow(
      <Component classes={classes}>
        <Button>First</Button>
        <Button>Second</Button>
      </Component>
    );

    expect(wrapper.name()).toEqual("span");
    expect(wrapper.prop("children").length).toEqual(2);
    expect(wrapper.childAt(0).name()).toEqual("span");
    expect(wrapper.childAt(0).prop("className")).toEqual("item");
    expect(wrapper).toMatchSnapshot();
  });

  it("should merge user classes", () => {
    const wrapper = shallow(
      <Component className="customClass" classes={classes}>
        <Button>First</Button>
        <Button>Second</Button>
      </Component>
    );

    expect(wrapper.prop("className")).toEqual("root customClass");
  });

  it("should pass `color` prop to the child component", () => {
    const wrapper = shallow(
      <Component color="primary" classes={classes}>
        <Button>First</Button>
        <Button>Second</Button>
      </Component>
    );

    expect(
      wrapper
        .find("Jss(Button)")
        .at(0)
        .prop("color")
    ).toEqual("primary");
  });

  it("should past the `rest` props to the root node", () => {
    const wrapper = shallow(
      <Component classes={classes} dataTest="rest prop">
        <Button>First</Button>
        <Button>Second</Button>
      </Component>
    );

    expect(wrapper.prop("dataTest")).toEqual("rest prop");
  });

  it("should render the first `Button` with `selected` prop", () => {
    const wrapper = shallow(
      <Component selectable value={1} classes={classes}>
        <Button value={1}>First</Button>
        <Button value={2}>Second</Button>
      </Component>
    );

    expect(
      wrapper
        .find("Jss(Button)")
        .at(0)
        .prop("selected")
    ).toBeTruthy();
  });

  it("should render the second `Button` with `selected` prop", () => {
    const wrapper = shallow(
      <Component selectable value={2} classes={classes}>
        <Button value={1}>First</Button>
        <Button value={2}>Second</Button>
      </Component>
    );

    expect(
      wrapper
        .find("Jss(Button)")
        .at(1)
        .prop("selected")
    ).toBeTruthy();
  });

  //TODO: add test case to check Clicking behaviour

  it("should render a `justified` element with full size", () => {
    const wrapper = shallow(
      <Component justified classes={classes}>
        <Button>First</Button>
        <Button>Second</Button>
      </Component>
    );

    expect(wrapper.prop("className")).toEqual("root justified");
  });
});
