import { recipe } from "@vanilla-extract/recipes"
import { createVar, globalStyle, style } from "@vanilla-extract/css"
import { sprinkles } from "@styles/sprinkles.css"

export const svg = sprinkles({
  dp: 'inline-block'
})
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
        fontSize: '1em'
      },
      md: {
        fontSize: '2em'
      },
      lg: {
        fontSize: '3em'
      },
      xl: {
        fontSize: '4em'
      },
      xxl: {
        fontSize: '5em'
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
    transform: 'translate(-50%, -50%)'
  }
])
globalStyle(`${layerText} span`, {
  display: "inline-block"
})

export const textColor = createVar();
export const layerTextInner = style({
  display: 'inline-block',
  height: 'auto',
  color: textColor,
})
