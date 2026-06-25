import type { Dispatch, SetStateAction } from "react";

/** Type definition of shared functions pertaining to the avatar. @type */
export interface AvatarActionContextType {
  /** Function to set the flag that tells whether the avatar is blushing or not. @property */
  setIsBlushing: Dispatch<SetStateAction<boolean>>;
}

/** Type definition of shared variables pertaining to the avatar. @type */
export interface AvatarContextType {
  /** Whether the avatar is blushing or not. @property */
  isBlushing: boolean;
}
