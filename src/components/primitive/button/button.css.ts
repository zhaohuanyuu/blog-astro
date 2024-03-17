import { sprinkles } from "../../../styles/sprinkles.css"
import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "../../../styles/theme/contract.css"
import { transition } from "../../../styles/tokens/motion"
import { pseudoSelectors } from '../../../styles/utils/selectors'

export const buttonBaseStyle = style([
  {
    position: 'relative',
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    transitionProperty: transition.property.common,
    transitionDuration: transition.duration.normal,
    selectors: {
      [pseudoSelectors.hover]: {
        opacity: .8
      },
      [pseudoSelectors.focusVisible]: {
        boxShadow: vars.shadow.outline
      },
      [pseudoSelectors.disabled]: {
        opacity: .5,
        boxShadow: 'none',
        cursor: 'not-allowed'
      }
    }
  },
  sprinkles({
    lh: 'short',
    p: '1',
    va: 'middle',
    br: 'base',
    fw: 'normal',
  })
])

export const buttonVariants = styleVariants({
  primary: [
    sprinkles({
      bg: 'primary',
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
