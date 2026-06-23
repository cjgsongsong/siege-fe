import { AVATAR_ASSET_PATHS } from "../constants";
import generateAvatarAssetFilePath from "../generateAvatarAssetFilePath";
import { AvatarPart } from "../styles";

/** Hair of the interactive self avatar. @component */
export default function AvatarHair() {
  return (
    <AvatarPart
      src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT)}
    />
  );
}
