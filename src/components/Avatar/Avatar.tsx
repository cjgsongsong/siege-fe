import AvatarBody from "./AvatarBody";
import AvatarClothes from "./AvatarClothes";
import { AVATAR_ASSET_PATHS, AVATAR_ASSET_STYLES } from "./constants";
import generateAvatarAssetFilePath from "./generateAvatarAssetFilePath";
import { AvatarContainer, AvatarPart, BlendedAvatarPart } from "./styles";

/** Interactive self avatar reminiscent of Filipino politicians in posters. @component */
export default function Avatar() {
  return (
    <AvatarContainer>
      <AvatarBody />
      <AvatarClothes />

      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT)}
      />

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
    </AvatarContainer>
  );
}
