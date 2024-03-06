import { style } from "@vanilla-extract/css"
import { vars } from "@styles/theme/contract.css"
import { transition } from "@styles/tokens/motion"
import { pseudoSelectors } from '@styles/utils/selectors'

export const buttonBaseStyle = style({
  position: 'relative',
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  outline: 'none',
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
