import React from "react";

import Icon from "../../Icon";
import Avatar from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Avatar.InnerComponent;

describe("<Avatar />", () => {
  describe("Icon avatar", () => {
    it("should render a div containing an <Icon />", () => {
      const wrapper = shallow(
        <Component classes={classes}>
          <Icon label="lock" />
        </Component>
      );

      expect(wrapper.name()).toEqual("div");
      expect(wrapper.childAt(0).is("Icon")).toBeTruthy();
    });

    it("should render icon avatar correctly", () => {
      const wrapper = shallow(
        <Component classes={classes}>
          <Icon label="lock" />
        </Component>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
