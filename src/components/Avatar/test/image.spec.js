import React from "react";

import Avatar from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Avatar.InnerComponent;

describe("<Avatar />", () => {
  describe("Image avatar", () => {
    it("should render a div containing an img", () => {
      const wrapper = shallow(<Component classes={classes} src="img.jpg" />);

      expect(wrapper.name()).toEqual("div");
      expect(wrapper.childAt(0).is("img")).toBeTruthy();
    });

    it("should pass img props to <img />", () => {
      const wrapper = shallow(
        <Component
          classes={classes}
          alt="John Doe"
          srcSet="john.png 1x, jane.png 2x"
        />
      );

      expect(wrapper.find("img").prop("alt")).toEqual("John Doe");
      expect(wrapper.find("img").prop("srcSet")).toEqual(
        "john.png 1x, jane.png 2x"
      );
    });

    it("should render img avatar correctly", () => {
      const wrapper = shallow(<Component classes={classes} src="img.jpg" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
