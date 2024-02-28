import { createTheme } from "@vanilla-extract/css"

import { BASE } from "./base"
import { vars } from "./contract.css"
import { lightColors } from "../tokens/colors"

export const theme = createTheme(vars, {
  ...BASE,
  color: lightColors
})
