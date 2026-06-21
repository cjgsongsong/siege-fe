import { AVATAR_ASSET_PATHS, AVATAR_ASSET_STYLES } from "./constants";
import generateAvatarAssetFilePath from "./generateAvatarAssetFilePath";
import {
  AvatarContainer,
  AvatarPart,
  BlendedAvatarPart,
  OpaqueAvatarPart,
} from "./styles";

/** Interactive self avatar reminiscent of Filipino politicians in posters. @component */
export default function Avatar() {
  return (
    <AvatarContainer>
      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.BODY.BASE)}
      />
      <BlendedAvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.BODY.BLUSH)}
        {...AVATAR_ASSET_STYLES.BODY.BLUSH}
      />

      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.CLOTHES.SANDO)}
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
