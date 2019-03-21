import React from "react";
import Avatar from "iburn/components/Avatar";
import AvatarStack from "iburn/components/Avatar/Stack";

export default (function Demo (props) {
  const { images } = props;

  return (
    <AvatarStack>
      {images.map(image => (
        <Avatar key={image} src={image} />
      ))}
    </AvatarStack>
  );
});
