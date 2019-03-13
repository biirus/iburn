import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";

export default function Code (props) {
  return (
    <SyntaxHighlighter language="jsx" style={atomDark} showLineNumbers={true}>
      {props.children}
    </SyntaxHighlighter>
  );
}
