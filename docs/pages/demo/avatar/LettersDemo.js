import React from "react";
import Avatar from "iburn/components/Avatar";
import AvatarStack from "iburn/components/Avatar/Stack";

export default (function Demo (props) {
  const initials = ["AS", "SL", "IN", "DM", "TF", "PG"];

  return (
    <AvatarStack>
      {initials.map(initial => (
        <Avatar key={initial}>{initial}</Avatar>
      ))}
    </AvatarStack>
  );
});
