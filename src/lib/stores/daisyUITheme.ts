import { writable } from "svelte/store"

// The following is taken from https://github.com/saadeghi/daisyui/blob/master/src/theming/colorNames.js
// This is not ideal, there might be better ways of doing so --> open to suggestions!

export type daisyUIThemeType = {
  "font-family"?: string
  "color-scheme"?: string

  colors: {
    transparent?: string
    current?: string

    primary?: string
    "primary-focus"?: string
    "primary-content"?: string

    secondary?: string
    "secondary-focus"?: string
    "secondary-content"?: string

    accent?: string
    "accent-focus"?: string
    "accent-content"?: string

    neutral?: string
    "neutral-focus"?: string
    "neutral-content"?: string

    "base-100"?: string
    "base-200"?: string
    "base-300"?: string
    "base-content"?: string

    info?: string
    "info-content"?: string

    success?: string
    "success-content"?: string

    warning?: string
    "warning-content"?: string

    error?: string
    "error-content"?: string
  }
}

export const colorNameToKey: daisyUIThemeType = {
  "font-family": "font-family",
  "color-scheme": "color-scheme",

  colors: {
    primary: "--p",
    "primary-focus": "--pf",
    "primary-content": "--pc",

    secondary: "--s",
    "secondary-focus": "--sf",
    "secondary-content": "--sc",

    accent: "--a",
    "accent-focus": "--af",
    "accent-content": "--ac",

    neutral: "--n",
    "neutral-focus": "--nf",
    "neutral-content": "--nc",

    "base-100": "--b1",
    "base-200": "--b2",
    "base-300": "--b3",
    "base-content": "--bc",

    info: "--in",
    "info-content": "--inc",

    success: "--su",
    "success-content": "--suc",

    warning: "--wa",
    "warning-content": "--wac",

    error: "--er",
    "error-content": "--erc",
  },
}

const daisyUITheme = writable<daisyUIThemeType>()

export default daisyUITheme
