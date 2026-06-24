import { AVATAR_ASSET_PATHS, AVATAR_ASSET_STYLES } from "../constants";
import { generateAvatarAssetFilePath } from "../generateFilePath";
import { AvatarPart, AvatarPartStack, BlendedAvatarPart } from "../styles";

/** Body of the interactive self avatar. @component */
export default function AvatarBody() {
  return (
    <AvatarPartStack>
      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.BODY.BASE)}
      />
      <BlendedAvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.BODY.BLUSH)}
        {...AVATAR_ASSET_STYLES.BODY.BLUSH}
      />
    </AvatarPartStack>
  );
}
