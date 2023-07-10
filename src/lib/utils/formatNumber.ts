import numeral from "numeral"
import "numeral/locales/de"

// ----------------------------------------------------------------------
try {
  numeral.locale("de")
} catch (e) {
  console.log(e, numeral.locales)
}

type InputValue = string | number | null

export function fNumber(number: InputValue) {
  const format = number ? numeral(number).format("0.0a") : ""

  return result(format)
}

export function fCurrency(number: InputValue) {
  const format = number ? numeral(number).format("$ 0.00 a") : ""

  return result(format)
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : ""

  return result(format, ".0")
}

export function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format("0.00a") : ""

  return result(format, ".00")
}

export function fData(number: InputValue) {
  const format = number ? numeral(number).format("0.0 b") : ""

  return result(format, ".0")
}

function result(format: string, key = ".00") {
  const isInteger = format.includes(key)

  return isInteger ? format.replace(key, "") : format
}
