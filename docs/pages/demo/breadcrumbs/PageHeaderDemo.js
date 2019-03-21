import React from "react";

import Breadcrumbs from "iburn/components/Breadcrumbs";
import PageHeader from "iburn/components/Page/Header";

function BasicDemo () {
  return (
    <PageHeader
      breadcrumbs={
        <Breadcrumbs
          items={[
            { label: "Root", href: "/" },
            { label: "First child", href: "/first" },
          ]}
        />
      }
    >
      Current page
    </PageHeader>
  );
}

export default BasicDemo;
