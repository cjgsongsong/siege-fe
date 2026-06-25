import { createContext } from "react";
import type { AvatarActionContextType, AvatarContextType } from "./types";

/** Functions shared among the components of the interactive self avatar. @component */
export const AvatarActionContext = createContext<AvatarActionContextType>({
  setIsBlushing: () => {},
});

/** Variables shared among the components of the interactive self avatar. @component */
export const AvatarContext = createContext<AvatarContextType>({
  isBlushing: false,
});
