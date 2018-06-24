export default (triggerRect, popoverRect) => {
  const { left, top, bottom, width, } = triggerRect;
  const { width: popoverWidth, height: popoverHeight, } = popoverRect;
  const { scrollX, scrollY, } = window;
  const verticalMargin = 8;

  return {
    left: left + scrollX + (width - popoverWidth) / 2,
    right: left + scrollX + (width + popoverWidth) / 2,
    top: top + scrollY - popoverHeight - verticalMargin,
    bottom: bottom + scrollY + popoverHeight + verticalMargin,
  };
};
