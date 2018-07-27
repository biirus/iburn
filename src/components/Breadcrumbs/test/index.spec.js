import React from "react";

import Breadcrumbs from "../index";
import styles from "../styles";

const classes = getClasses(styles);
const Component = Breadcrumbs.InnerComponent;

describe("<Breadcrumbs />", () => {
  it("should merge user classes", () => {
    const wrapper = shallow(
      <Component
        classes={classes}
        className="customClassName"
        items={[{ label: "Root", href: "/", },]}
      />
    );

    expect(wrapper.prop("className")).toEqual("root customClassName");
  });

  it("should render a <Typography />", () => {
    const wrapper = shallow(
      <Component
        classes={classes}
        className="customClassName"
        items={[{ label: "Root", href: "/", },]}
      />
    );

    expect(wrapper.name()).toEqual("Jss(Typography)");
  });

  it("should return `null` if no `items` have been passed", () => {
    const wrapper = shallow(<Component classes={classes} />);
    expect(wrapper.type()).toBeNull();
  });

  it("shold pass the `rest` props to the root node", () => {
    const wrapper = shallow(
      <Component
        classes={classes}
        items={[{ label: "Root", href: "/", },]}
        dataTest="rest prop"
      />
    );

    expect(wrapper.at(0).prop("dataTest")).toEqual("rest prop");
  });

  it("should render Breadcrumbs correctly", () => {
    const wrapper = shallow(
      <Component
        classes={classes}
        items={[
          { label: "root", href: "/", },
          { label: "child", href: "/child", },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
