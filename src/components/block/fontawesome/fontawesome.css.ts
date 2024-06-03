import { recipe } from "@vanilla-extract/recipes"
import { createVar, style } from "@vanilla-extract/css"
import { sprinkles } from "../../../styles/sprinkles.css"

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

export const layer = recipe({
  base: sprinkles({
    pos: 'relative',
    dp: 'inline-block'
  }),
  variants: {
    size: {
      sm: {
        fontSize: '1.3333em'
      },
      md: {
        fontSize: '1.6em'
      },
      lg: {

      },
      xl: {

      },
      xxl: {

      }
    },
    pull: {
      left: {
        float: 'left'
      },
      right: {
        float: 'right'
      }
    },
    fw: {
      true: {
        width: '1.25em',
        textAlign: 'center'
      }
    }
  }
})

export const layerText = style([
  sprinkles({
    pos: 'absolute',
  }),
  {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    selectors: {
      "& span": {
        display: "inline-block",
      }
    }
  }
])

export const textColor = createVar();
export const layerTextInner = style({
  display: 'inline-block',
  height: 'auto',
  color: textColor,
})
