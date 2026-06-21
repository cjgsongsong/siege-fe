import { AVATAR_ASSET_PATHS, MIX_BLEND_MODES } from "./constants";

/** Utitility type definition of an enumeration's member given its enumeration's type. @type */
type Member<T> = T[keyof T];

/** Type definition of properties expected by avatar parts that are partially opaque. @type */
export interface OpaqueAvatarPartProps {
  /** Percentage at which the avatar part is opaque. @property */
  $opacity: number;
}

/** Type definition of file name literals pertaining to avatar body assets. @type */
type AvatarBodyFileName = Member<typeof AVATAR_ASSET_PATHS.FILE.BODY>;

/** Type definition of file name literals pertaining to avatar clothing assets. @type */
type AvatarClothesFileName = Member<typeof AVATAR_ASSET_PATHS.FILE.CLOTHES>;

/** Type definition of file name literals pertaining to avatar hair assets. @type */
type AvatarHairFileName = Member<typeof AVATAR_ASSET_PATHS.FILE.HAIR>;

/** Type definition of file name literals pertaining to avatar lens assets. @type */
type AvatarLensFileName = Member<typeof AVATAR_ASSET_PATHS.FILE.GLASSES.LENS>;

/** Type definition of file name literals pertaining to avatar assets. @type */
export type AvatarAssetFileName =
  | AvatarBodyFileName
  | AvatarClothesFileName
  | AvatarHairFileName
  | AvatarLensFileName
  | typeof AVATAR_ASSET_PATHS.FILE.GLASSES.FRAME;

/** Type definition of properties expected by avatar parts that blend with their backdrops. @type */
export interface BlendedAvatarPartProps extends OpaqueAvatarPartProps {
  /** Modes by which an element blends with its backdrop. @property */
  $mixBlendMode: Member<typeof MIX_BLEND_MODES>;
}
