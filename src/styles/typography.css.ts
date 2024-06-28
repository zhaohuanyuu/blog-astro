import {
  type StyleRule,
  style,
  globalStyle,
  styleVariants
} from "@vanilla-extract/css"
import { vars } from "./theme/contract.css"
import { minMediaQuery } from "./tokens/breakpoints"
import { headingFontFamilyClass } from "../styles/fonts.css"

export const prominent = style({
  fontSize: vars.fontSize.md,
  "@media": {
    [minMediaQuery('lg')]: {
      fontSize: vars.fontSize.lg
    },
    [minMediaQuery('xl')]: {
      fontSize: vars.fontSize.lgx
    }
  }
})

globalStyle(`${prominent} strong`, {
  color: vars.color.text,
  fontWeight: vars.fontWeight.medium
})

globalStyle(`${prominent} a`, {
  color: vars.color.text,
  fontWeight: vars.fontWeight.medium
})

const headingBaseStyle = style({
  color: vars.color.text,
  fontWeight: vars.fontWeight.bold
})

export type Headings = "h1" | "h2" | "h3" | "h4"

const headings: Record<Headings, StyleRule> = {
  h1: {
    fontWeight: vars.fontWeight.bold,
    letterSpacing: vars.letterSpacing.wide,
    lineHeight: vars.lineHeight['2xl'],
    marginBottom: vars.space[6],
    fontSize: vars.fontSize['2xl'],
    "@media": {
      [minMediaQuery("sm")]: {
        fontSize: vars.fontSize.xl,
      },
      [minMediaQuery("lg")]: {
        fontSize: vars.fontSize["2xl"],
      },
      [minMediaQuery("xl")]: {
        fontSize: vars.fontSize["3xl"],
      }
    }
  },
  h2: {
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight.xl,
    marginTop: vars.space['7'],
    marginBottom: vars.space[3],
    fontSize: vars.fontSize.lgx,
    "@media": {
      [minMediaQuery("sm")]: {
        fontSize: vars.fontSize.lg,
      },
      [minMediaQuery("lg")]: {
        fontSize: vars.fontSize.lgx,
      },
      [minMediaQuery("xl")]: {
        fontSize: vars.fontSize.xl,
      }
    }
  },
  h3: {
    fontWeight: vars.fontWeight.semibold,
    lineHeight: vars.lineHeight.lg,
    marginTop: vars.space['6'],
    marginBottom: vars.space[2],
    fontSize: vars.fontSize.lg,
    "@media": {
      [minMediaQuery("lg")]: {
        fontSize: vars.fontSize.lg,
      },
      [minMediaQuery("xl")]: {
        fontSize: vars.fontSize.lgx,
      },
    }
  },
  h4: {
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight.md,
    marginTop: vars.space['5'],
    marginBottom: vars.space[1],
    fontSize: vars.fontSize.md,
    "@media": {
      [minMediaQuery("lg")]: {
        fontSize: vars.fontSize.lg,
      },
      [minMediaQuery("xl")]: {
        fontSize: vars.fontSize.md,
      },
    }
  }
}

export const headingVariants = styleVariants(
  headings,
  (heading) => [headingBaseStyle, headingFontFamilyClass, heading]
)
