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
  OpaqueAvatarPart,
} from "../styles";

/** Clothes of the interactive self avatar. @component */
export default function AvatarClothes() {
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
            AVATAR_ASSET_PATHS.FILE.CLOTHES.SANDO,
          )}
        />
        <OpaqueAvatarPart
          src={generateAvatarAssetFilePath(
            AVATAR_ASSET_PATHS.FILE.CLOTHES.BARONG,
          )}
          {...AVATAR_ASSET_STYLES.CLOTHES.BARONG}
        />
        <AvatarPart
          src={generateAvatarAssetFilePath(
            AVATAR_ASSET_PATHS.FILE.CLOTHES.SABLAY,
          )}
        />
      </AvatarPartStack>

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.THREAD,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.CLOTHES}
      />
    </AvatarSection>
  );
}
