import clsx from "clsx/lite"
import { layer } from "./fontawesome.css"
import type { JSXElement } from "solid-js"

interface LayerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  pull?: 'left' | 'right'
  fw?: boolean
  children?: JSXElement
}

const FontAwesomeLayer = (props: LayerProps) => {
  return (
    <span
      class={clsx(
        layer({
          size: props.size,
          pull: props.pull,
          fw: props.fw
        })
      )}
    >{ props.children }</span>
  )
}

export default FontAwesomeLayer;
