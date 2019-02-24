import React from "react";
import ReactMarkdown from "react-markdown";
import { parse } from "react-docgen";

import avatarSrc from "raw-loader!../../src/components/Avatar";
import Avatar from "../../src/components/Avatar";
import Button from "../../src/components/Button";

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const content = await require(`../md/about.md`);

    return { content };
  }

  render () {
    // console.log(parse(avatarSrc));
    return (
      <div>
        <Avatar>asdasd</Avatar>
        <Button>PUSH ME</Button>
        {/* <ReactMarkdown source={this.props.content} /> */}
      </div>
    );
  }
}
