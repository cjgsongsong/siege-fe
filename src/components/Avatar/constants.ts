/** Avatar asset path substrings. @enum  */
export const AVATAR_ASSET_PATHS = {
  DIRECTORY: "src/assets/avatar/",
  FILE: {
    BODY: {
      BASE: "body-base",
      BLUSH: "body-blush",
    },
    CLOTHES: {
      BARONG: "clothes-barong",
      SABLAY: "clothes-sablay",
      SANDO: "clothes-sando",
      SHIRT: "clothes-shirt",
    },
    GLASSES: {
      FRAME: "glasses-frame",
      LENS: {
        COLOR: "glasses-lens-color",
        TINT: "glasses-lens-tint",
      },
    },
    HAIR: {
      BOWL_CUT: "hair-bowl-cut",
      DEFAULT: "hair-default",
    },
  },
  FILE_EXTENSION: ".png",
} as const;

/** Modes by which an element blends with its backdrop. @enum */
export const MIX_BLEND_MODES = {
  ADD: "color-dodge",
  MULTIPLY: "multiply",
  OVERLAY: "overlay",
  SOFT_LIGHT: "soft-light",
} as const;

/** Avatar asset style configurations. @enum */
export const AVATAR_ASSET_STYLES = {
  BODY: {
    BLUSH: {
      $mixBlendMode: MIX_BLEND_MODES.OVERLAY,
      $opacity: 25,
    },
  },
  CLOTHES: {
    BARONG: { $opacity: 80 },
  },
  GLASSES: {
    COLOR: {
      $mixBlendMode: MIX_BLEND_MODES.SOFT_LIGHT,
      $opacity: 50,
    },
    TINT: {
      NORMAL: {
        $mixBlendMode: MIX_BLEND_MODES.ADD,
        $opacity: 25,
      },
      TINTED: {
        $mixBlendMode: MIX_BLEND_MODES.MULTIPLY,
        $opacity: 65,
      },
    },
  },
} as const;
