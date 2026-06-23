import { AVATAR_ASSET_PATHS, AVATAR_ASSET_STYLES } from "../constants";
import generateAvatarAssetFilePath from "../generateAvatarAssetFilePath";
import { AvatarPart, BlendedAvatarPart } from "../styles";

/** Glasses of the interactive self avatar. @component */
export default function AvatarGlasses() {
  return (
    <>
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
    </>
  );
}
