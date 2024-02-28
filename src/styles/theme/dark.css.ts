import { createTheme } from "@vanilla-extract/css"

import { BASE } from "./base"
import { vars } from "./contract.css"
import { darkColors } from "../tokens/colors"

export const theme = createTheme(vars, {
  ...BASE,
  color: darkColors
})
