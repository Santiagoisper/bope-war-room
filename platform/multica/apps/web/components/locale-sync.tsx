"use client";

import { useEffect } from "react";

/**
 * Reads the locale cookie on the client and updates <html lang>.
 * This avoids calling cookies() in the root Server Component layout,
 * which would mark the entire app as dynamic and disable the Router Cache.
 */
export function LocaleSync() {
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)multica-locale=(\w+)/);
    const locale = match?.[1];
    if (locale === "zh") {
      document.documentElement.lang = "zh";
    }
  }, []);

  return null;
}
