import { type JSXElement, createMemo } from "solid-js"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { layerText, layerTextInner, textColor } from "./fontawesome.css"

interface LayerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  color?: string
  scale?: number
  translateX?: number | string
  translateY?: number | string
  rotate?: number | string
  flip?: 'horizontal' | 'vertical' | 'both'
  children?: JSXElement
}

const FontAwesomeLayer = (props: LayerProps) => {
  const generateTransform = createMemo(({ translateX, translateY, rotate, flip }): string =>  {
    let transformString = '';

    if (translateX !== undefined) {
      transformString += `translateX(${typeof translateX === 'number' ? translateX + 'px' : translateX}) `;
    }
    if (translateY !== undefined) {
      transformString += `translateY(${typeof translateY === 'number' ? translateY + 'px' : translateY}) `;
    }
    if (rotate !== undefined) {
      transformString += `rotate(${typeof rotate === 'number' ? rotate + 'deg' : rotate}) `;
    }
    if (flip) {
      switch (flip) {
        case 'horizontal':
          transformString += `scaleX(-1) `;
          break;
        case 'vertical':
          transformString += `scaleY(-1) `;
          break;
        case 'both':
          transformString += `scale(-1, -1) `;
          break;
      }
    }

    return transformString.trim();
  }, props)

  return (
    <span class={layerText}>
      <span class={layerTextInner} style={assignInlineVars({
        [textColor]: props.color,
        transform: generateTransform()
      })}>{ props.children }</span>
    </span>
  )
}

export default FontAwesomeLayer;
