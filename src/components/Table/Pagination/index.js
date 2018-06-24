import React from "react";
import cn from "classnames";

// components
import Button from "components/Button";
import Typography from "components/Typography";

// enhancers
import { enhance } from "./enhance";

const range = (start, end) =>
  [...Array(end - start + 1)].map((_, i) => i + start);

class Pagination extends React.Component {
  static defaultProps = {
    visible: 7,
    perPage: 10,
    pageSizes: [10, 20, 30],
    onPageChange: f => f,
    onPageSizeChange: f => f
  };

  handlePageChange = page => e => {
    this.props.onPageChange(page, e);
  };

  handlePageSizeChange = size => e => {
    this.props.onPageSizeChange(size, e);
  };

  getPageClassName = (page, currentPage) => {
    const { classes } = this.props;

    return cn(classes.item, {
      [classes.current]: page === currentPage,
      [classes.ellipsis]: page === null
    });
  };

  getPageSizeClassName = size => {
    const { classes, perPage } = this.props;

    return cn({
      [classes.current]: size === perPage
    });
  };

  render() {
    const {
      className,
      classes,
      total,
      page,
      visible,
      perPage,
      pageSizes,
      onPageChange,
      onPageSizeChange,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className);

    // TODO: Refactor this shitty method
    if (!total) {
      return null;
    }

    const delta = Math.floor(visible / 2);
    const totalPages = Math.ceil(total / perPage - 1);

    let start = 0;
    let end = Math.min(totalPages, visible);
    let ellipsis = false;

    if (totalPages > visible) {
      ellipsis = "both";

      start = page - delta;
      end = page + delta;

      if (start <= 0) {
        end += Math.abs(start) + 1;
        start = 0;
        ellipsis = "end";
      }

      if (end >= totalPages) {
        start -= end - totalPages;
        end = totalPages;
        ellipsis = "start";
      }
    }

    const pages = !ellipsis
      ? range(start, end)
      : ellipsis === "both"
        ? [0, null, ...range(start + 2, end - 2), null, totalPages]
        : ellipsis === "start"
          ? [0, null, ...range(start + 2, end)]
          : [...range(start, end - 2), null, totalPages];

    return (
      <div {...rest} className={classNames}>
        <div className={classes.pageSizeControl}>
          <Typography component="div" type="h200">
            View
          </Typography>

          <div className={classes.pageSizeSelectors}>
            {pageSizes.map(size => (
              <Button
                key={size}
                view="link"
                className={this.getPageSizeClassName(size)}
                onClick={this.handlePageSizeChange(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className={classes.pages}>
          <Typography component="div" type="h200">
            Showing {perPage * page + 1} &mdash;{" "}
            {Math.min(perPage * (page + 1), total)} of {total}
          </Typography>

          {pages.length > 1 && (
            <div className={classes.controls}>
              <Button
                view="link"
                size="inline"
                disabled={page === 0}
                onClick={this.handlePageChange(page - 1)}
              >
                Prev
              </Button>
              {pages.map((item, index) => (
                <Button
                  key={index}
                  view="link"
                  onClick={this.handlePageChange(item)}
                  className={this.getPageClassName(item, page)}
                >
                  {item === null ? "..." : item + 1}
                </Button>
              ))}
              <Button
                view="link"
                size="inline"
                disabled={page === totalPages}
                onClick={this.handlePageChange(page + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default enhance(Pagination);
