/**
 * Transforms HSL string to Hex color. If error, returns value.
 * @param hsl hsl string, like 259 94% 51%
 * @returns hex code for the color
 */
export default function hslStringToHex(hsl: string): string {
  try {
    const parsedHsl: [number, number, number] = hsl
      .replaceAll("%", "")
      .split(" ")
      .map((s) => Number(s)) as [number, number, number]
    return hslToHex(...parsedHsl)
  } catch (e) {
    console.log(`Error while updating color: ${e}`)
    return hsl
  }
}

// from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
function hslToHex(hue: number, saturation: number, lightness: number): string {
  lightness /= 100
  const a = (saturation * Math.min(lightness, 1 - lightness)) / 100
  const f = (n: number) => {
    const k = (n + hue / 30) % 12
    const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0")
  }
  return `#${f(0)}${f(8)}${f(4)}`
}
