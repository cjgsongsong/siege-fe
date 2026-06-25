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
  BlendedAvatarPart,
} from "../styles";

/** Glasses of the interactive self avatar. @component */
export default function AvatarGlasses() {
  const [frameIndex, setFrameIndex] = useState(
    AVATAR_CONFIGURATIONS.GLASSES.indexOf(
      AVATAR_ASSET_PATHS.FILE.GLASSES.FRAME,
    ),
  );
  const [isHovering, setIsHovering] = useState(false);

  const frameConfiguration = useMemo(
    () => AVATAR_CONFIGURATIONS.GLASSES[frameIndex],
    [frameIndex],
  );

  function handleClick() {
    setNextConfigurationIndex({
      configurations: AVATAR_CONFIGURATIONS.GLASSES,
      setConfigurationIndex: setFrameIndex,
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
      {frameConfiguration !== "" && (
        <>
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
        </>
      )}

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.GLASSES,
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.GLASSES}
      />
    </AvatarSection>
  );
}
