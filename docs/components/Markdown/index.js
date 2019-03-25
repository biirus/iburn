import React from "react";

import Badge from "iburn/components/Badge";
import Typography from "iburn/components/Typography";
import ReactMarkdown from "react-markdown";

export default function Markdown (props) {
  const defaultRenderers = {
    paragraph: Typography,
    link: props => (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ),
    inlineCode: props => <Badge>{props.children}</Badge>,
  };

  const renderers = {
    ...defaultRenderers,
    ...props.renderers,
  };

  return <ReactMarkdown {...props} renderers={renderers} />;
}

Markdown.defaultProps = {
  renderers: {},
};
