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
  AvatarPartContainer,
  AvatarTriggerArea,
  BlendedAvatarPart,
} from "../styles";

/** Glasses of the interactive self avatar. @component */
export default function AvatarGlasses() {
  return (
    <AvatarPartContainer>
      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.GLASSES.FRAME)}
      />
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
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.GLASSES}
      />
    </AvatarPartContainer>
  );
}
