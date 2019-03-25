import React from "react";
import Avatar from "iburn/components/Avatar";
import Badge from "iburn/components/Badge";
import Icon from "iburn/components/Icon";

import withStyles from "react-jss";

const styles = ({ spacing }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
    },

    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: spacing.medium,
    },

    title: {
      marginTop: spacing.small,
    },
  };
};

const enhance = withStyles(styles);

export default enhance(function Demo (props) {
  const { colors, classes } = props;

  return (
    <div className={classes.root}>
      {colors.map(c => (
        <div key={c} className={classes.item}>
          <Avatar size="xLarge" color={c}>
            <Icon label="user-avatar-circle" size={64} />
          </Avatar>
          <Badge className={classes.title}>{c}</Badge>
        </div>
      ))}
    </div>
  );
});
