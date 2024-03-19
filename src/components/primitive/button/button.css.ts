import { type RecipeVariants, recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../../../styles/sprinkles.css"
import { vars } from "../../../styles/theme/contract.css"
import { transition } from "../../../styles/tokens/motion"
import { pseudoSelectors } from '../../../styles/utils/selectors'

export const ButtonStyle = recipe({
  base: [
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
  ],
  variants: {
    color: {
      primary: sprinkles({
        bg: 'primary'
      }),
      secondary: sprinkles({
        bg: 'secondary'
      }),
      accent: sprinkles({
        bg: 'accent'
      })
    },
    variant: {
      light: {
        backgroundColor: 'transparent'
      },
      ghost: {
        padding: 0,
        color: vars.color.textMuted,
        backgroundColor: 'transparent',
        borderRadius: vars.borderRadius.full,
        transitionProperty: transition.property.colors,
        transitionDuration: transition.duration.slow,
        transitionEffect: transition.easing['ease-in-out'],
        selectors: {
          [pseudoSelectors.hover]: {
            color: vars.color.pure,
            backgroundColor: vars.color.ghost
          }
        }
      }
    }
  }
})

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
