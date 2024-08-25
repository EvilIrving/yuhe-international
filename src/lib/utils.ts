import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Locale } from "../../i18n-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const redirectedPathName = (pathName: string, locale: Locale) => {
  if (!pathName) return "/";
  const segments = pathName.split("/");
  segments[1] = locale;
  return segments.join("/");
};
