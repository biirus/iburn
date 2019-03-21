import React, { Component } from "react";
import Banner from "iburn/components/Banner";
import Button from "iburn/components/Button";
import Icon from "iburn/components/Icon";

import withStyles from "react-jss";

const enhance = withStyles(({ spacing }) => {
  return {
    root: {
      padding: [[spacing.large, 0]],
    },
    buttonsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(5, max-content)",
      gridGap: `${spacing.medium}px`,
      alignItems: "center",
      justifyItems: "center",
    },
  };
});

export default enhance(
  class Demo extends Component {
    state = {
      default: false,
      success: false,
    };

    toggleBanner = banner => {
      this.setState(state => ({
        [banner]: !state[banner],
      }));
    };

    isBannerOpen = banner => {
      return this.state[banner];
    };

    render () {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <Banner
            color="default"
            isOpen={this.isBannerOpen("default")}
            icon={<Icon label="add-item" />}
          >
            New log row has been added
          </Banner>

          <Banner
            color="success"
            isOpen={this.isBannerOpen("success")}
            icon={<Icon label="emoji" />}
          >
            Custom Success Icon
          </Banner>

          <div className={classes.buttonsRow}>
            <Button
              color="default"
              onClick={() => this.toggleBanner("default")}
            >
              Add log row
            </Button>

            <Button
              color="success"
              onClick={() => this.toggleBanner("success")}
            >
              Try for FREE
            </Button>
          </div>
        </div>
      );
    }
  }
);
