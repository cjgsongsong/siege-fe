import { AVATAR_ASSET_PATHS, AVATAR_ASSET_STYLES } from "../constants";
import { generateAvatarAssetFilePath } from "../generateFilePath";
import { AvatarPart, AvatarPartContainer, AvatarTriggerArea } from "../styles";

/** Hair of the interactive self avatar. @component */
export default function AvatarHair() {
  return (
    <AvatarPartContainer>
      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT)}
      />

      <AvatarTriggerArea {...AVATAR_ASSET_STYLES.TRIGGER_AREA.HAIR} />
    </AvatarPartContainer>
  );
}
