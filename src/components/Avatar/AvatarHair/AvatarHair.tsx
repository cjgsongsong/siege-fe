import { AVATAR_ASSET_PATHS } from "../constants";
import generateAvatarAssetFilePath from "../generateAvatarAssetFilePath";
import { AvatarPart, AvatarPartContainer } from "../styles";

/** Hair of the interactive self avatar. @component */
export default function AvatarHair() {
  return (
    <AvatarPartContainer>
      <AvatarPart
        src={generateAvatarAssetFilePath(AVATAR_ASSET_PATHS.FILE.HAIR.DEFAULT)}
      />
    </AvatarPartContainer>
  );
}
