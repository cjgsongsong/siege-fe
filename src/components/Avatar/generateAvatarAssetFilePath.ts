import { AVATAR_ASSET_PATHS } from "./constants";
import type { AvatarAssetFileName } from "./types";

/**
 * Generate avatar asset file path from given avatar asset file name.
 *
 * @function
 * @param fileName Avatar asset file name.
 * @returns Avatar asset file path.
 */
export default function generateAvatarAssetFilePath(
  fileName: AvatarAssetFileName,
) {
  return `${AVATAR_ASSET_PATHS.DIRECTORY}${fileName}${AVATAR_ASSET_PATHS.FILE_EXTENSION}`;
}
