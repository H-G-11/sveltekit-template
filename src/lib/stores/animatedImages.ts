import { writable } from "svelte/store"

type animatedImageType =
  | "themesStart"
  | "themesEnd"
  | "languagesStart"
  | "languagesEnd"

const animatedImage = writable<animatedImageType>()

export default animatedImage
