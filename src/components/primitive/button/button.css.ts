import { sprinkles } from "../../../styles/sprinkles.css"
import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "../../../styles/theme/contract.css"
import { transition } from "../../../styles/tokens/motion"
import { pseudoSelectors } from '../../../styles/utils/selectors'

export const buttonBaseStyle = style({
  position: 'relative',
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  outline: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  lineHeight: vars.lineHeight.shorter,
  borderRadius: vars.borderRadius.md,
  fontWeight: vars.fontWeight.normal,
  transitionProperty: transition.property.common,
  transitionDuration: transition.duration.normal,
  selectors: {
    [pseudoSelectors.focusVisible]: {
      boxShadow: vars.shadow.outline
    },
    [pseudoSelectors.disabled]: {
      opacity: .4,
      boxShadow: 'none',
      cursor: 'not-allowed'
    }
  }
})

export const buttonVariants = styleVariants({
  primary: [
    style({
      // backgroundColor: vars.color.primary
    }),
    sprinkles({
      p: '2',
      bg: 'primary',
      c: 'bg',
    })
  ],
  ghost: {
    color: 'inherit',
    backgroundColor: 'transparent',
    selectors: {
      [pseudoSelectors.hover]: {
        backgroundColor: vars.color.ghostBg
      },
      [pseudoSelectors.active]: {
        backgroundColor: vars.color.ghostBg
      }
    }
  }
})
