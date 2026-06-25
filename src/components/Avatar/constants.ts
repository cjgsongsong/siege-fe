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

/** Cursor asset path substrings. @enum  */
export const CURSOR_ASSET_PATHS = {
  DIRECTORY: "src/assets/cursors/",
  FILE: {
    GLASSES: "glasses",
    SCISSORS: "scissors",
    THREAD: "thread",
  },
  FILE_EXTENSION: ".svg",
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
  TRIGGER_AREA: {
    CLOTHES: {
      $bottom: 0,
      $height: 30,
      $width: 99,
    },
    GLASSES: {
      $height: 12,
      $left: 24,
      $top: 39,
      $width: 47,
    },
    HAIR: {
      $height: 25,
      $left: 25.5,
      $top: 12.5,
      $width: 45,
    },
  },
} as const;

/** Avatar configurations. @enum */
export const AVATAR_CONFIGURATIONS = {
  CLOTHES: ["", ...Object.values(AVATAR_ASSET_PATHS.FILE.CLOTHES)],
  GLASSES: ["", AVATAR_ASSET_PATHS.FILE.GLASSES.FRAME],
  HAIR: Object.values(AVATAR_ASSET_PATHS.FILE.HAIR),
} as const;
