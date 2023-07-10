import { derived, writable } from "svelte/store"
import type {
  LocaleKey,
  LocaleLanguage,
  LocaleVar,
  LocaleVarObject,
} from "./translations"
import { localeLanguages, translations } from "./translations"

const locale = writable<LocaleLanguage>("en")

function translate(
  locale: LocaleLanguage,
  key: LocaleKey,
  vars: LocaleVarObject
) {
  if (!key) throw new Error("no key provided to $t()")
  if (!locale) throw new Error(`no translation for key "${key}"`)

  // Grab the translation from the translations object.
  let text = translations[locale][key]

  if (!text) throw new Error(`no translation found for ${locale}.${key}`)

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g")
    text = text.replace(regex, vars[k as LocaleVar])
  })

  return text
}

const t = derived(
  locale,
  ($locale) =>
    (key: LocaleKey, vars: LocaleVarObject = {}) =>
      translate($locale, key, vars)
)
export { t, locale, localeLanguages }
export type { LocaleLanguage }
