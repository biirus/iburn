import React from "react";

import Avatar from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Avatar.InnerComponent;

describe("<Avatar />", () => {
  it("should merge user classes", () => {
    const wrapper = shallow(
      <Component className="customClass" classes={classes}>
        IB
      </Component>
    );

    expect(wrapper.prop("className")).toEqual("root customClass");
  });

  it("should pass the rest props to the root element", () => {
    const wrapper = shallow(
      <Component classes={classes} dataTest="rest prop">
        IB
      </Component>
    );

    expect(wrapper.prop("dataTest")).toEqual("rest prop");
  });
});
