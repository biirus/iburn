export default (safeZone, position) => {
  const { scrollX, scrollY, innerWidth, innerHeight } = window;

  const horizontalPosition = position.includes("left")
    ? "left"
    : position.includes("right")
      ? "right"
      : null;

  const verticalPosition = position.includes("top")
    ? "top"
    : position.includes("bottom")
      ? "bottom"
      : null;

  const checkings = {
    horizontal: {
      left: x => x >= scrollX,
      right: x => x <= scrollX + innerWidth
    },
    vertical: {
      top: y => y >= scrollY,
      bottom: y => y <= scrollY + innerHeight
    }
  };

  const horizontal = Object.keys(checkings.horizontal).filter(key => {
    return !checkings.horizontal[key](safeZone[key]);
  });

  const vertical = Object.keys(checkings.vertical).filter(key => {
    return checkings.vertical[key](safeZone[key]);
  });

  return {
    horizontal: horizontalPosition || horizontal[0] || "center",
    vertical: verticalPosition || vertical[1] || vertical[0] || "bottom"
  };
};
