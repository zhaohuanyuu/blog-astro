import { style } from "@vanilla-extract/css"

export const inverse = style({
  color: 'currentcolor',
  filter: 'invert()'
})

export const opacity = style({
  selectors: {
    "&:first-child" : {
      opacity: .4
    },
    "&:last-child" : {
      opacity: 1
    }
  }
})
