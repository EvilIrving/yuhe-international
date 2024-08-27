export const i18n = {
  defaultLocale: "zh",
  locales: ["en", "zh"],
  langs: [
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
  ],
} as const;

export type LanguageObject = {
  [key in (typeof i18n.langs)[number]["code"]]: string;
};
export type Locale = (typeof i18n)["locales"][number];
