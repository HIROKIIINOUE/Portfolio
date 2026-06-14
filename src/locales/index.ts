export const supportedLocales = ["en", "ja", "fr"] as const;
export type Locale = (typeof supportedLocales)[number];
export const fallbackLocale: Locale = "en";
