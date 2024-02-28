import { createThemeContract } from "@vanilla-extract/css"

import { BASE } from "./base"
import { colorContract } from "../tokens/colors"

export const vars = createThemeContract({
  ...BASE,
  color: colorContract
})
