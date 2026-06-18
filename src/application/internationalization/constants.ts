/** Language codes as defined by ISO 639-3. @enum */
export const LANGUAGE_CODES = { ENGLISH: "en", FILIPINO: "fil" } as const;

/** Internationalization constants. @enum */
export const INTERNATIONALIZATION = {
  DEVELOPMENT_LANGUAGE_CODE: "cimode",
  FALLBACK_LANGUAGE: LANGUAGE_CODES.ENGLISH,
} as const;
