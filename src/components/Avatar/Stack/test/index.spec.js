import React from "react";

import AvatarStack from "../index";
import Avatar from "../../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = AvatarStack.InnerComponent;

describe("<AvatarStack />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <Component className="customClass" classes={classes} dataRest="data rest">
        <Avatar>IB</Avatar>
        <Avatar>AB</Avatar>
      </Component>
    );
  });

  it("should merge passed className with internal root class", () => {
    expect(wrapper.prop("className")).toEqual("root customClass");
  });

  it("should pass the rest props to the root node", () => {
    expect(wrapper.at(0).prop("dataRest")).toEqual("data rest");
  });

  it("should render 2 child components", () => {
    expect(wrapper.find(".item").length).toEqual(2);
  });

  it("should render the <Avatar /> component inside .item div", () => {
    expect(
      wrapper
        .childAt(1)
        .childAt(0)
        .is("Jss(Avatar)")
    ).toBeTruthy();
  });

  it("should render the <AvatarStack /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
