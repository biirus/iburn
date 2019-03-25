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

const getTypeValue = type => {
  const values = {
    arrayOf: type => type.value.name,
    enum: type => type.value.map(v => v.value.replace(/"/g, "")).join(", "),
  };

  return values[type.name] ? values[type.name](type) : null;
};

const PropRow = ({
  classes,
  name,
  description,
  required,
  type,
  defaultValue,
  shouldRenderDefaultCell,
}) => {
  const typeValue = getTypeValue(type);

  return (
    <Row className={classes.root}>
      <Cell className={classes.cell}>
        <Typography type="h300" color={required ? "primary" : "default"}>
          {name}
          {required && " *"}
        </Typography>
      </Cell>

      <Cell className={classes.cell} classes={{ inner: classes.cellInner }}>
        <Badge>
          {type.name}
          {typeValue && ": " + typeValue}
        </Badge>
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

const PropsTable = ({ classes, propsList }) => {
  const hasAtLeastOneDefaultValue = !!Object.values(propsList).find(
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
        {Object.keys(propsList).map(key => (
          <PropRow
            key={key}
            name={key}
            classes={classes}
            shouldRenderDefaultCell={hasAtLeastOneDefaultValue}
            {...propsList[key]}
          />
        ))}
      </TableBody>
    </Table>
  );
};

const enhance = withStyles(styles);
export default enhance(PropsTable);
