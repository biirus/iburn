import React from "react";

import Icon from "../../Icon";
import Button from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Button.InnerComponent;

describe("<Button />", () => {
  it("should render the <Icon /> before label", () => {
    const wrapper = shallow(
      <Component classes={classes} icon={<Icon label="lock" />}>
        Button content
      </Component>
    );

    expect(wrapper.childAt(0).name()).toEqual("Icon");
    expect(wrapper.childAt(1).type()).toEqual("span");
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the <Icon /> after label", () => {
    const wrapper = shallow(
      <Component classes={classes} iconAfter={<Icon label="lock" />}>
        Button content
      </Component>
    );

    expect(wrapper.childAt(0).type()).toEqual("span");
    expect(wrapper.childAt(1).name()).toEqual("Icon");
    expect(wrapper).toMatchSnapshot();
  });

  it("should render only <Icon />", () => {
    const wrapper = shallow(
      <Component classes={classes} icon={<Icon label="lock" />} />
    );

    expect(wrapper.childAt(0).name()).toEqual("Icon");
    expect(wrapper.prop("children").filter(i => !!i).length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
