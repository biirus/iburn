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
      openedBanners: [],
    };

    openBanner = banner => {
      this.setState(({ openedBanners }) => ({
        openedBanners: [...openedBanners, banner],
      }));
    };

    closeBanner = banner => {
      this.setState(({ openedBanners }) => ({
        openedBanners: openedBanners.filter(b => b !== banner),
      }));
    };

    toggleBanner = banner => {
      if (this.isBannerOpen(banner)) {
        this.closeBanner(banner);
      } else {
        this.openBanner(banner);
      }
    };

    isBannerOpen = banner => {
      return this.state.openedBanners.includes(banner);
    };

    render () {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <Banner isOpen={this.isBannerOpen("default")}>Default Banner</Banner>

          <Banner color="warning" isOpen={this.isBannerOpen("warning")}>
            Warning Banner
          </Banner>

          <Banner color="error" isOpen={this.isBannerOpen("error")}>
            Error Banner
          </Banner>

          <Banner color="info" isOpen={this.isBannerOpen("info")}>
            Info Banner
          </Banner>

          <Banner color="success" isOpen={this.isBannerOpen("success")}>
            Success Banner
          </Banner>

          <div className={classes.buttonsRow}>
            <Button onClick={() => this.toggleBanner("default")}>
              Toggle Default Banner
            </Button>

            <Button
              color="warning"
              onClick={() => this.toggleBanner("warning")}
            >
              Toggle Warning Banner
            </Button>

            <Button color="error" onClick={() => this.toggleBanner("error")}>
              Toggle Error Banner
            </Button>

            <Button color="info" onClick={() => this.toggleBanner("info")}>
              Toggle Info Banner
            </Button>

            <Button
              color="success"
              onClick={() => this.toggleBanner("success")}
            >
              Toggle Success Banner
            </Button>
          </div>
        </div>
      );
    }
  }
);
