import React from "react";

import Avatar from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Avatar.InnerComponent;

describe("<Avatar />", () => {
  describe("Text avatar", () => {
    it("should render a div containing a passed text", () => {
      const wrapper = shallow(<Component classes={classes}>IB</Component>);

      expect(wrapper.name()).toEqual("div");
      expect(wrapper.childAt(0).text()).toEqual("IB");
    });

    it("should render text avatar correctly", () => {
      const wrapper = shallow(<Component classes={classes}>IB</Component>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
