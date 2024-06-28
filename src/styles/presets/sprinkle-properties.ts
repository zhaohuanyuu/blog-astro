import { vars } from "../theme/contract.css"
import { zIndices } from "../tokens/z-indices"

const colorAtoms = {
  text: vars.color.text,
  textSecondary: vars.color.textSecondary,
  bgSecondary: vars.color.bgSecondary,
  primary: vars.color.primary,
  secondary: vars.color.secondary,
  highlight: vars.color.highlight,
  muted: vars.color.muted,
  accent: vars.color.accent,
  pink: vars.color.pink,
  gray: vars.color.gray,
  blueGray: vars.color.blueGray,
  border: vars.color.border
}

export const colorProperties = {
  color: {
    text: colorAtoms.text,
    textSecondary: colorAtoms.textSecondary,
    primary: colorAtoms.primary,
    secondary: colorAtoms.secondary,
    highlight: colorAtoms.highlight,
    muted: colorAtoms.muted,
    accent: colorAtoms.accent,
    pink: colorAtoms.pink,
    gray: colorAtoms.gray,
    blueGray: colorAtoms.blueGray
  },
  borderColor: {
    border: colorAtoms.border
  },
  backgroundColor: {
    bgSecondary: colorAtoms.bgSecondary,
    primary: colorAtoms.primary,
    secondary: colorAtoms.secondary,
    highlight: colorAtoms.highlight,
    muted: colorAtoms.muted,
    accent: colorAtoms.accent,
    pink: colorAtoms.pink,
    gray: colorAtoms.gray,
    blueGray: colorAtoms.blueGray
  }
}

export type ColorProperties = keyof typeof colorProperties;

export const unresponsiveProperties = {
  zIndex: zIndices,
  boxSizing: ['content-box', 'border-box'],
  overflow: ['hidden', 'scroll', 'auto', 'visible'],
  position: ['relative', 'absolute', 'fixed', 'sticky','static'],
  width: ['100%', 'auto'],
  height: ['100%', 'auto'],
  opacity: [0, .1, .5, 1],
  lineHeight: vars.lineHeight,
  fontWeight: vars.fontWeight,
  letterSpacing: vars.letterSpacing,
  border: ['none'],
  gap: vars.space,
  boxShadow: vars.shadow,
  borderRadius: vars.borderRadius,
  textAlign: ['left', 'center', 'right'],
  verticalAlign: ['baseline', 'middle', 'bottom'],
  whiteSpace: ['normal', 'nowrap', 'pre-wrap', 'break-spaces', 'inherit']
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties

export const responsiveProperties = {
  display: ["block", "inline-block", "flex", "inline-flex"],
  fontSize: vars.fontSize,
  margin: vars.space,
  marginTop: vars.space,
  marginBottom: vars.space,
  marginRight: vars.space,
  marginLeft: vars.space,
  padding: vars.space,
  paddingTop: vars.space,
  paddingBottom: vars.space,
  paddingRight: vars.space,
  paddingLeft: vars.space,
  flexDirection: ["row", "column", "row-reverse", "column-reverse"],
  alignItems: ["flex-start", "flex-end", "center"],
  justifyContent: ["flex-start", "flex-end", "center", "space-between"],
  flexWrap: ["wrap", "nowrap"],
  maxWidth: ['100%', '600px', '700px', '768px'],
} as const;

export type ResponsiveProperties = keyof typeof responsiveProperties
