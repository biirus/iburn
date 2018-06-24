const horizontalTriggerMultipliers = {
  left: 0,
  center: 0.5,
  right: 1,
};

const horizontalPopoverMultipliers = {
  left: 0,
  center: -0.5,
  right: -1,
};

const verticalTriggerMultipliers = {
  top: 0,
  center: 0.5,
  bottom: 1,
};

const verticalPopoverMultipliers = {
  top: -1,
  center: -0.5,
  bottom: 0,
};

export default (
  { width, height, },
  { horizontal, vertical, },
  isTrigger = false
) => {
  const verticalMargin = isTrigger ? 8 * (vertical === "bottom" ? 1 : -1) : 0;

  const horizontalMultiplier = isTrigger
    ? horizontalTriggerMultipliers[horizontal]
    : horizontalPopoverMultipliers[horizontal];

  const verticalMultiplier = isTrigger
    ? verticalTriggerMultipliers[vertical]
    : verticalPopoverMultipliers[vertical];

  return {
    h: width * horizontalMultiplier,
    v: height * verticalMultiplier + verticalMargin,
  };
};
