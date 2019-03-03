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

const getTypeValue = type => {
  const values = {
    arrayOf: type => type.value.name,
    enum: type => type.value.map(v => v.value.replace(/"/g, "")).join(" | "),
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
  shouldRenderRequiredCell,
}) => {
  const typeValue = getTypeValue(type);

  return (
    <Row className={classes.root}>
      <Cell className={classes.cell}>
        <Typography type="h300">{name}</Typography>
      </Cell>

      {shouldRenderRequiredCell && (
        <Cell className={classes.cell}>
          {required && <Typography type="h300">required</Typography>}
        </Cell>
      )}

      <Cell className={classes.cell} classes={{ inner: classes.cellInner }}>
        <Badge>{type.name}</Badge>
        {typeValue && (
          <Badge
            color="primary"
            dangerouslySetInnerHTML={{ __html: typeValue }}
          />
        )}
      </Cell>

      {shouldRenderDefaultCell && (
        <Cell className={classes.cell}>
          {defaultValue && <Badge>{defaultValue.value}</Badge>}
        </Cell>
      )}

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

const PropsTable = ({ classes, propsList }) => {
  const hasAtLeastOneDefaultValue = !!Object.values(propsList).find(
    prop => !!prop.defaultValue
  );

  const hasAtLeastOneRequired = !!Object.values(propsList).find(
    prop => !!prop.required
  );

  return (
    <Table>
      <TableHead className={classes.header}>
        <Row>
          <Cell>Name</Cell>
          {hasAtLeastOneRequired && <Cell>Required</Cell>}
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
            shouldRenderRequiredCell={hasAtLeastOneRequired}
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
