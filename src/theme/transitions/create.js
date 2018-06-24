import timingFuncs from "./timing";

const durations = {
  instant: 0,
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
  leaveWaiting: 195 + 10,
};

const hasDuration = duration => {
  return Object.keys(durations).includes(duration);
};

export default (
  props = ["all",],
  duration = durations.standard,
  delay = durations.instant,
  timing = timingFuncs.default
) => {
  duration = hasDuration(duration) ? durations[duration] : duration;
  delay = hasDuration(delay) ? durations[delay] : delay;

  return props
    .map(prop => `${prop} ${duration}ms ${delay}ms ${timing}`)
    .join(", ");
};
