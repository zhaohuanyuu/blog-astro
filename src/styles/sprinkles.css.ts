import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"

import { vars } from "./theme/contract.css"
import { theme as darkTheme } from "./theme/dark.css"
import { theme as lightTheme } from "./theme/light.css"
import { breakpointNames, minMediaQuery, mobile } from "./tokens/breakpoints"
import { unresponsiveProperties, responsiveProperties } from "./presets/sprinkle-properties"

export const themesSelectors = {
  light: `html${lightTheme} &`,
  dark: `html${darkTheme} &`,
}

const colorAtomProperties = defineProperties({
  defaultCondition: ['light', 'dark'],
  conditions: {
    light: { selector: themesSelectors.light },
    dark: { selector: themesSelectors.dark }
  },
  properties: {
    color: vars.color,
    borderColor: vars.color,
    backgroundColor: vars.color
  },
  shorthands: {
    c: ['color'],
    bc: ['borderColor'],
    bg: ['backgroundColor']
  }
})

const unresponsiveAtomProperties = defineProperties({
  properties: unresponsiveProperties,
  shorthands: {
    bz: ['boxSizing'],
    pos: ['position'],
    ow: ['overflow'],
    w: ['width'],
    h: ['height'],
    lh: ['lineHeight'],
    ta: ['textAlign'],
    va: ['verticalAlign'],
    fw: ['fontWeight'],
    bs: ['boxShadow'],
    ws: ['whiteSpace'],
    ls: ['letterSpacing'],
    br: ['borderRadius'],
  }
})

const responsiveAtomProperties = defineProperties({
  defaultCondition: 'default',
  conditions: {
    default: {},
    mobile: {
      "@media": mobile
    },
    sm: {
      "@media": minMediaQuery('sm')
    },
    md: {
      "@media": minMediaQuery('md')
    },
    lg: {
      "@media": minMediaQuery('lg')
    },
    xl: {
      "@media": minMediaQuery('xl')
    },
    '2xl': {
      "@media": minMediaQuery('2xl')
    }
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    dp: ['display'],
    fd: ['flexDirection'],
    ai: ['alignItems'],
    jc: ['justifyContent'],
    fz: ['fontSize'],
    m: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom']
  }
})

export const sprinkles = createSprinkles(
  colorAtomProperties,
  responsiveAtomProperties,
  unresponsiveAtomProperties
)

export type Sprinkle = Parameters<typeof sprinkles>[0]
