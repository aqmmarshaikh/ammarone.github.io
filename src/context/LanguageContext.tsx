"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { en, type Translations } from "@/locales/en";
import { hi } from "@/locales/hi";
import { gu } from "@/locales/gu";

export type Lang = "en" | "hi" | "gu";

const locales: Record<Lang, Translations> = { en, hi, gu };
const STORAGE_KEY = "jalaram_lang";
const VALID_LANGS: Lang[] = ["en", "hi", "gu"];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  locale: Translations;
  t: (key: string, params?: Record<string, string>) => string;
}

function getNestedValue(
  obj: Record<string, unknown>,
  keys: string[]
): string {
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object") {
      current = (current as Record<string, unknown>)[key];
    } else {
      return keys.join(".");
    }
  }
  return typeof current === "string" ? current : keys.join(".");
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  locale: en,
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore from localStorage (client-only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang;
      if (saved && VALID_LANGS.includes(saved)) {
        setLangState(saved);
      }
    } catch {
      // localStorage not available (SSR / private mode)
    }
  }, []);

  // Sync html[lang] attribute for SEO & screen readers
  useEffect(() => {
    const htmlLang = lang === "en" ? "en" : lang === "hi" ? "hi-IN" : "gu-IN";
    document.documentElement.setAttribute("lang", htmlLang);
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // localStorage not available
    }
  }, []);

  const locale = locales[lang];

  const t = useCallback(
    (key: string, params?: Record<string, string>): string => {
      let result = getNestedValue(
        locale as unknown as Record<string, unknown>,
        key.split(".")
      );
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          result = result.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), v);
        });
      }
      return result;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
