import styled from "styled-components";
import type { BlendedAvatarPartProps, OpaqueAvatarPartProps } from "./types";

/** Container of stacked avatar part containers. @component */
export const AvatarContainer = styled.div`
  height: 75vh;
  position: relative;
  width: 75vh;
`;

/** Resized avatar part. @component */
export const AvatarPart = styled.img`
  height: 100%;
  position: absolute;
  width: 100%;
`;

/** Container of stacked avatar parts.  @component */
export const AvatarPartContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;

/** Avatar part that is partially opaque. @component */
export const OpaqueAvatarPart = styled(AvatarPart)<OpaqueAvatarPartProps>`
  opacity: ${(props) => props.$opacity}%;
`;

/** Avatar part that blends with its backdrop. @component */
export const BlendedAvatarPart = styled(
  OpaqueAvatarPart,
)<BlendedAvatarPartProps>`
  mix-blend-mode: ${(props) => props.$mixBlendMode};
`;
