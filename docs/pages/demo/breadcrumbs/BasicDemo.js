import React from "react";

import Breadcrumbs from "iburn/components/Breadcrumbs";

function BasicDemo () {
  return (
    <Breadcrumbs
      items={[
        { label: "Root", href: "/" },
        { label: "First child", href: "/first" },
      ]}
    />
  );
}

export default BasicDemo;
