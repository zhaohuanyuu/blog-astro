import {
  For,
  Show,
  createMemo,
  type JSX,
  type Accessor,
} from "solid-js"
import clsx from "clsx/lite";
import type { FontAwesomeIconProps } from "./type"
import { inverse, opacity } from "./fontawesome.css"
import {
  parse,
  icon,
  type AbstractElement
} from "@fortawesome/fontawesome-svg-core"

const fallbackIcon = (
  <svg>
    <path
      fill="red"
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
    />
  </svg>
);


const FontAwesomeIcon = (props: FontAwesomeIconProps): JSX.Element => {
  const transform = typeof props.transform === "string" ? parse.transform(props.transform) : props.transform;
  const abstract: Accessor<AbstractElement> = createMemo<AbstractElement>((): AbstractElement => {
    const faicon = icon(props.icon);
    if (!faicon) {
      console.error(`The icon ${props.icon} was not found in the library`);
      return { tag: "", attributes: {} };
    }
    return faicon.abstract[0];
  })
  const { tag, children, attributes } = abstract();
  const { class: iconCls, ...abstractAttrs } = attributes;
  const composedCls = clsx(
    iconCls,
    props.class,
    props.swapOpacity && opacity,
    props.inverse && inverse
  )
  const styles = `font-size:${transform?.size ? transform.size / 16 : 1}em`;
  return (
    <Show
      fallback={fallbackIcon}
      when={tag === 'svg'}
    >
      <svg
        style={styles}
        class={composedCls}
        { ...abstractAttrs }
      >
        <Show when={(children || [])[0].tag === "path"}>
          <path
            { ...(children || [])[0].attributes }
          />
        </Show>
        <Show when={(children || [])[0].tag === "g"}>
          <g { ...(children || [])[0].attributes }>
            <For each={(children || [])[0].children}>
              { path => <path { ...path.attributes } /> }
            </For>
          </g>
        </Show>
      </svg>
    </Show>
  )
}

export default FontAwesomeIcon;
