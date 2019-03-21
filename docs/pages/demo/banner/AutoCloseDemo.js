import React, { Component } from "react";
import Banner from "iburn/components/Banner";
import Button from "iburn/components/Button";

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
      info: false,
      success: false,

      timer: 0,
    };

    interval = null;

    toggleBanner = banner => {
      this.setState(state => ({
        [banner]: !state[banner],
      }));
    };

    isBannerOpen = banner => {
      return this.state[banner];
    };

    startCountDown = initial => () => {
      this.setState(
        {
          timer: initial,
        },
        () => {
          if (this.interval) {
            clearInterval(this.interval);
          }

          this.interval = setInterval(() => {
            this.setState(({ timer }) => ({
              timer: timer - 1,
            }));
          }, 1000);
        }
      );
    };

    render () {
      const { classes } = this.props;
      const { timer } = this.state;

      return (
        <div className={classes.root}>
          <Banner
            color="info"
            isOpen={this.isBannerOpen("info")}
            autoCloseTimeout={3000}
            onEnter={this.startCountDown(3)}
            onClose={() => this.toggleBanner("info")}
          >
            Info Banner will close in {timer} sec
          </Banner>

          <Banner
            color="success"
            isOpen={this.isBannerOpen("success")}
            autoCloseTimeout={2000}
            onEnter={this.startCountDown(2)}
            onClose={() => this.toggleBanner("success")}
          >
            Success Banner will close in {timer} sec
          </Banner>

          <div className={classes.buttonsRow}>
            <Button color="info" onClick={() => this.toggleBanner("info")}>
              Auto close in 3 sec
            </Button>

            <Button
              color="success"
              onClick={() => this.toggleBanner("success")}
            >
              Auto close in 2 sec
            </Button>
          </div>
        </div>
      );
    }
  }
);
