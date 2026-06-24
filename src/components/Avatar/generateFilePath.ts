import { AVATAR_ASSET_PATHS } from "./constants";
import type { AvatarAssetFileName, generateFilePathProps } from "./types";

/**
 * Generate file path from given path substrings.
 *
 * @function
 * @param directoryPath Directory path that contains the asset.
 * @param fileExtension Asset file extension.
 * @param fileName Asset file name.
 * @returns Asset file path.
 */
function generateFilePath({
  directoryPath,
  fileExtension,
  fileName,
}: generateFilePathProps) {
  return `${directoryPath}${fileName}${fileExtension}`;
}

/**
 * Generate avatar asset file path from given avatar asset file name.
 *
 * @function
 * @param fileName Avatar asset file name.
 * @returns Avatar asset file path.
 */
export function generateAvatarAssetFilePath(fileName: AvatarAssetFileName) {
  return generateFilePath({
    directoryPath: AVATAR_ASSET_PATHS.DIRECTORY,
    fileExtension: AVATAR_ASSET_PATHS.FILE_EXTENSION,
    fileName,
  });
}
