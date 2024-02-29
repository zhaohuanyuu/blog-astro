import { style, globalFontFace } from "@vanilla-extract/css"
import interVariableWoff2 from "/fonts/inter-latin.var.woff2"
import monolisaVariableWoff2 from "/fonts/monolisa.var.woff2"

const interVar = 'Inter'
const monolisa = 'MonoLisa'

globalFontFace(interVar, {
  fontWeight: '400 700',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: `url(${interVariableWoff2}) format("woff2")`,
  unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`
})

globalFontFace(monolisa, {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: `url(${monolisaVariableWoff2}) format("woff2")`,
  unicodeRange: 'U+0020-007F, U+0300-036F, U+20A0-20CF, U+00DF, U+00D8'
})

export const fonts = {
  body: `'${interVar}', system-ui, -apple-system, Roboto, sans-serif, BlinkMacSystemFont, Segoe UI, Helvetica Neue`,
  heading: "inherit",
  monospace: `${monolisa}, Menlo, Monaco, Monospace, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`
}

export const bodyFontFamilyClass = style({
  fontFamily: fonts.body,
})

export const headingFontFamilyClass = style({
  fontFamily: fonts.heading,
})

export const monoFontFamilyClass = style({
  fontFamily: fonts.monospace,
})
