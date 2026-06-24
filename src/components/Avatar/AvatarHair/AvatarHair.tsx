import {
  AVATAR_ASSET_PATHS,
  AVATAR_ASSET_STYLES,
  CURSOR_ASSET_PATHS,
} from "../constants";
import {
  generateAvatarAssetFilePath,
  generateCursorAssetFilePath,
} from "../generateFilePath";
import { AvatarPart, AvatarPartContainer, AvatarTriggerArea } from "../styles";

/** Hair of the interactive self avatar. @component */
export default function AvatarHair() {
  return (
    <AvatarPartContainer>
      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT)}
      />

      <AvatarTriggerArea
        $cursorFilePath={generateCursorAssetFilePath(
          CURSOR_ASSET_PATHS.FILE.SCISSORS,
        )}
        {...AVATAR_ASSET_STYLES.TRIGGER_AREA.HAIR}
      />
    </AvatarPartContainer>
  );
}
