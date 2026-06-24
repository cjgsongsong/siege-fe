import { useState } from "react";
import {
  AVATAR_ASSET_PATHS,
  AVATAR_ASSET_STYLES,
  AVATAR_CONFIGURATIONS,
  CURSOR_ASSET_PATHS,
} from "../constants";
import {
  generateAvatarAssetFilePath,
  generateCursorAssetFilePath,
} from "../generateFilePath";
import setNextConfigurationIndex from "../setNextConfigurationIndex";
import {
  AvatarPart,
  AvatarPartStack,
  AvatarSection,
  AvatarTriggerArea,
} from "../styles";

/** Hair of the interactive self avatar. @component */
export default function AvatarHair() {
  const [hairIndex, setHairIndex] = useState(
    AVATAR_CONFIGURATIONS.HAIR.indexOf(AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT),
  );
  const [isHovering, setIsHovering] = useState(false);

  function handleClick() {
    setNextConfigurationIndex({
      configurations: AVATAR_CONFIGURATIONS.HAIR,
      setConfigurationIndex: setHairIndex,
    });
  }
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
            AVATAR_CONFIGURATIONS.HAIR[hairIndex],
          )}
        />
      </AvatarPartStack>

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.SCISSORS,
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.HAIR}
      />
    </AvatarSection>
  );
}
