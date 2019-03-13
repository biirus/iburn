import React from "react";
import Avatar from "iburn/components/Avatar";
import Badge from "iburn/components/Badge";

import withStyles from "react-jss";

const styles = ({ spacing }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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

  return (
    <div className={classes.root}>
      {sizes.map((size, index) => (
        <div key={size} className={classes.item}>
          <Avatar size={size} src={images[index]} />
          <Badge className={classes.title}>{size}</Badge>
        </div>
      ))}
    </div>
  );
});
