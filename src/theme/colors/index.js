import brand from "./brand";
import green from "./green";
import neutral from "./neutral";
import purple from "./purple";
import red from "./red";
import yellow from "./yellow";

import createAlpha from "./alpha";

export default {
  ...brand,
  ...green,
  ...neutral,
  ...purple,
  ...red,
  ...yellow,
  ...createAlpha(neutral, brand),
};
