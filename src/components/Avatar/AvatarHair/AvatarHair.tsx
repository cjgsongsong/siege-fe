import { useState } from "react";
import {
  AVATAR_ASSET_PATHS,
  AVATAR_ASSET_STYLES,
  CURSOR_ASSET_PATHS,
} from "../constants";
import {
  generateAvatarAssetFilePath,
  generateCursorAssetFilePath,
} from "../generateFilePath";
import {
  AvatarPart,
  AvatarPartStack,
  AvatarSection,
  AvatarTriggerArea,
} from "../styles";

/** Hair of the interactive self avatar. @component */
export default function AvatarHair() {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }
  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <AvatarSection>
      <AvatarPartStack $isHovering={isHovering}>
        <AvatarPart
          src={generateAvatarAssetFilePath(
            AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT,
          )}
        />
      </AvatarPartStack>

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.SCISSORS,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.HAIR}
      />
    </AvatarSection>
  );
}
