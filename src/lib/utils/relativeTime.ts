import TimeAgo from "javascript-time-ago"

import en from "javascript-time-ago/locale/en"
import fr from "javascript-time-ago/locale/fr"
import de from "javascript-time-ago/locale/de"

TimeAgo.addLocale(en)
TimeAgo.addLocale(fr)
TimeAgo.addLocale(de)

const englishTimeAgo = new TimeAgo("en-US")
const frenchTimeAgo = new TimeAgo("fr-FR")
const germanTimeAgo = new TimeAgo("de-DE")

const timeAgoFromLanguage: Record<"en" | "de" | "fr", TimeAgo> = {
  en: englishTimeAgo,
  de: germanTimeAgo,
  fr: frenchTimeAgo,
}

export default function relativeTimeStringFromAbsoluteTimeNumber(
  languageIdentifier: "en" | "de" | "fr",
  timeNumber: number
): string {
  // Returns "2 days ago"
  return timeAgoFromLanguage?.[languageIdentifier]?.format(timeNumber)
}
