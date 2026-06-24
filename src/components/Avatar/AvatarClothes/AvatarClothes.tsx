import { AVATAR_ASSET_PATHS, AVATAR_ASSET_STYLES } from "../constants";
import generateAvatarAssetFilePath from "../generateAvatarAssetFilePath";
import {
  AvatarPart,
  AvatarPartContainer,
  AvatarTriggerArea,
  OpaqueAvatarPart,
} from "../styles";

/** Clothes of the interactive self avatar. @component */
export default function AvatarClothes() {
  return (
    <AvatarPartContainer>
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

      <AvatarTriggerArea {...AVATAR_ASSET_STYLES.TRIGGER_AREA.CLOTHES} />
    </AvatarPartContainer>
  );
}
