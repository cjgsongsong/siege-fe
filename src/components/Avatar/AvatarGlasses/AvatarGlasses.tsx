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
  BlendedAvatarPart,
} from "../styles";

/** Glasses of the interactive self avatar. @component */
export default function AvatarGlasses() {
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
            AVATAR_ASSET_PATHS.FILE.GLASSES.FRAME,
          )}
        />
      </AvatarPartStack>

      <BlendedAvatarPart
        src={generateAvatarAssetFilePath(
          AVATAR_ASSET_PATHS.FILE.GLASSES.LENS.COLOR,
        )}
        {...AVATAR_ASSET_STYLES.GLASSES.COLOR}
      />
      <BlendedAvatarPart
        src={generateAvatarAssetFilePath(
          AVATAR_ASSET_PATHS.FILE.GLASSES.LENS.TINT,
        )}
        {...AVATAR_ASSET_STYLES.GLASSES.TINT.NORMAL}
      />

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.GLASSES,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.GLASSES}
      />
    </AvatarSection>
  );
}
