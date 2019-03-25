import React from "react";
import Avatar from "iburn/components/Avatar";
import Badge from "iburn/components/Badge";

import withStyles from "react-jss";

const styles = ({ spacing }) => {
  return {
    row: {
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
  const { images, classes } = props;
  const sizes = ["xxLarge", "xLarge", "large", "medium", "small", "xSmall"];
  const initials = ["AS", "SL", "IN", "DM", "TF", "PG"];

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        {sizes.map((size, index) => (
          <div key={size} className={classes.item}>
            <Avatar size={size} src={images[index]} />
            <Badge className={classes.title}>{size}</Badge>
          </div>
        ))}
      </div>

      <div className={classes.row}>
        {sizes.reverse().map((size, index) => (
          <div key={size} className={classes.item}>
            <Avatar size={size}>{initials[index]}</Avatar>
            <Badge className={classes.title}>{size}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
});
