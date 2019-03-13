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

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Avatar size="xLarge">
          <Icon label="user-avatar-circle" size={64} />
        </Avatar>
        <Badge className={classes.title}>Icon</Badge>
      </div>

      <div className={classes.item}>
        <Avatar size="xLarge">IB</Avatar>
        <Badge className={classes.title}>Text</Badge>
      </div>

      <div className={classes.item}>
        <Avatar size="xLarge" src={images[0]} />
        <Badge className={classes.title}>Image by src</Badge>
      </div>

      <div className={classes.item}>
        <Avatar
          size="xLarge"
          srcSet={`${images[0]} 960w, ${images[2]} 1280w`}
        />
        <Badge className={classes.title}>Image by srcSet</Badge>
      </div>
    </div>
  );
});
