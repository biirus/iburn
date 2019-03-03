import React from "react";

import withStyles from "react-jss";
import styles from "./styles";

import Badge from "iburn/components/Badge";
import Typography from "iburn/components/Typography";
import Table from "iburn/components/Table";
import TableBody from "iburn/components/Table/Body";
import TableHead from "iburn/components/Table/Head";
import Row from "iburn/components/Table/Row";
import Cell from "iburn/components/Table/Cell";

import ReactMarkdown from "react-markdown";

const StyleRow = ({
  classes,
  name,
  description,
  required,
  type,
  defaultValue,
}) => {
  return (
    <Row className={classes.root}>
      <Cell className={classes.cell}>
        <Typography type="h300">{name}</Typography>
      </Cell>

      <Cell className={classes.cell}>
        <ReactMarkdown
          source={description}
          renderers={{
            paragraph: Typography,
          }}
        />
      </Cell>
    </Row>
  );
};

const StylesTable = ({ classes, stylesList }) => {
  return (
    <Table>
      <TableHead className={classes.header}>
        <Row>
          <Cell>Name</Cell>
          <Cell>Description</Cell>
        </Row>
      </TableHead>
      <TableBody>
        {Object.keys(stylesList).map(key => (
          <StyleRow
            key={key}
            name={key}
            classes={classes}
            {...stylesList[key]}
          />
        ))}
      </TableBody>
    </Table>
  );
};

const enhance = withStyles(styles);
export default enhance(StylesTable);
