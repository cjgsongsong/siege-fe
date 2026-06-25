import { useMemo, useState } from "react";
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
  OpaqueAvatarPart,
} from "../styles";

/** Clothes of the interactive self avatar. @component */
export default function AvatarClothes() {
  const [clothesIndex, setClothesIndex] = useState(
    AVATAR_CONFIGURATIONS.CLOTHES.indexOf(
      AVATAR_ASSET_PATHS.FILE.CLOTHES.SABLAY,
    ),
  );
  const [isHovering, setIsHovering] = useState(false);

  const clothesConfiguration = useMemo(
    () => AVATAR_CONFIGURATIONS.CLOTHES[clothesIndex],
    [clothesIndex],
  );

  function handleClick() {
    setNextConfigurationIndex({
      configurations: AVATAR_CONFIGURATIONS.CLOTHES,
      setConfigurationIndex: setClothesIndex,
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
      {clothesConfiguration !== "" && (
        <AvatarPartStack $isHovering={isHovering}>
          <AvatarPart
            src={generateAvatarAssetFilePath(
              clothesConfiguration === AVATAR_ASSET_PATHS.FILE.CLOTHES.SHIRT
                ? clothesConfiguration
                : AVATAR_ASSET_PATHS.FILE.CLOTHES.SANDO,
            )}
          />

          {(clothesConfiguration === AVATAR_ASSET_PATHS.FILE.CLOTHES.BARONG ||
            clothesConfiguration ===
              AVATAR_ASSET_PATHS.FILE.CLOTHES.SABLAY) && (
            <OpaqueAvatarPart
              src={generateAvatarAssetFilePath(
                AVATAR_ASSET_PATHS.FILE.CLOTHES.BARONG,
              )}
              {...AVATAR_ASSET_STYLES.CLOTHES.BARONG}
            />
          )}

          {clothesConfiguration === AVATAR_ASSET_PATHS.FILE.CLOTHES.SABLAY && (
            <AvatarPart
              src={generateAvatarAssetFilePath(
                AVATAR_ASSET_PATHS.FILE.CLOTHES.SABLAY,
              )}
            />
          )}
        </AvatarPartStack>
      )}

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.THREAD,
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.CLOTHES}
      />
    </AvatarSection>
  );
}
