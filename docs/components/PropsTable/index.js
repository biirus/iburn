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

import Markdown from "docs/components/Markdown";
import { typeToString } from "./lib";

const PropRow = ({
  classes,
  name,
  description,
  required,
  type,
  defaultValue,
  shouldRenderDefaultCell,
}) => {
  return (
    <Row className={classes.root}>
      <Cell className={classes.cell}>
        <Typography type="h300" color={required ? "primary" : "default"}>
          {name}
          {required && " *"}
        </Typography>
      </Cell>

      <Cell className={classes.cell} classes={{ inner: classes.cellInner }}>
        {type && <Badge className={classes.type}>{typeToString(type)}</Badge>}
      </Cell>

      {shouldRenderDefaultCell && (
        <Cell className={classes.cell}>
          {defaultValue && <Badge>{defaultValue.value}</Badge>}
        </Cell>
      )}

      <Cell className={classes.cell}>
        <Markdown source={description} />
      </Cell>
    </Row>
  );
};

const PropsTable = ({ classes, propsMap }) => {
  const hasAtLeastOneDefaultValue = !!Object.values(propsMap).find(
    prop => !!prop.defaultValue
  );

  return (
    <Table>
      <TableHead className={classes.header}>
        <Row>
          <Cell>Name</Cell>
          <Cell>Type</Cell>
          {hasAtLeastOneDefaultValue && <Cell>Default value</Cell>}
          <Cell>Description</Cell>
        </Row>
      </TableHead>
      <TableBody>
        {Object.keys(propsMap).map(key => (
          <PropRow
            key={key}
            name={key}
            classes={classes}
            shouldRenderDefaultCell={hasAtLeastOneDefaultValue}
            {...propsMap[key]}
          />
        ))}
      </TableBody>
    </Table>
  );
};

const enhance = withStyles(styles);
export default enhance(PropsTable);
