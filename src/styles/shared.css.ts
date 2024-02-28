import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { rem } from "../styles/utils"

export const cssNoBlurriness = style({
  overflow: 'hidden',
  /* Avoid blurriness */
  backfaceVisibility: 'hidden',
  transform: 'translate3d(0, 0, 0.1px)'
})

export const cssFocusVisible = recipe({
  variants: {
    isFocusVisible: {
      true: {
        outline: `transparent solid ${rem(2)}`,
        outlineOffset: rem(2),
        boxShadow: "0 0 0 2px $colors$background, 0 0 0 4px $colors$primary",
      },
      false: {
        outline: 'none'
      }
    }
  }
})

