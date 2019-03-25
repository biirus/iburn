import React from "react";
import Icon from "iburn/components/Icon";
import Avatar from "iburn/components/Avatar";
import AvatarStack from "iburn/components/Avatar/Stack";

export default (function Demo (props) {
  const icons = ["attachment", "audio", "billing", "book", "camera", "comment"];

  return (
    <AvatarStack>
      {icons.map(icon => (
        <Avatar key={icon} size="large">
          <Icon label={icon} />
        </Avatar>
      ))}
    </AvatarStack>
  );
});
