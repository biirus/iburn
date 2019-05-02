import React from "react";

import Calendar from "iburn/components/Calendar";

function Demo () {
  return (
    <div>
      <Calendar />
      <Calendar range={true} />
    </div>
  );
}

export default Demo;
