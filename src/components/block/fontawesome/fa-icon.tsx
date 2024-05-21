import {
  For,
  Show,
  createMemo,
  type JSX,
  type Accessor
} from "solid-js"
import clsx from "clsx/lite";
import { parse, icon, type AbstractElement } from "@fortawesome/fontawesome-svg-core"
import type { FontAwesomeIconProps } from "./type"

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
    const faicon = icon(parse.icon(props.icon));
    if (!faicon) {
      console.error(`The icon ${props.icon} was not found in the library`);
      return { tag: "", attributes: {} };
    }
    return faicon.abstract[0];
  })
  const composedCls = clsx(
    'svg-inline-fa',
    props.icon,
    props.swapOpacity && 'fa-swap-opacity',
    props.className,
    props.inverse && 'fa-inverse'
  )
  const styles = `font-size:${transform?.size ? transform.size / 16 : 1}em`;
  return (
    <Show
      fallback={fallbackIcon}
      when={abstract().tag === 'svg'}
    >
      <svg
        style={styles}
        class={composedCls}
        { ...abstract().attributes }
      >
        <Show when={(abstract().children || [])[0].tag === "path"}>
          <path
            { ...(abstract().children || [])[0].attributes }
          />
        </Show>
        <Show when={(abstract().children || [])[0].tag === "g"}>
          <g { ...(abstract().children || [])[0].attributes }>
            <For each={(abstract().children || [])[0].children}>
              { path => <path { ...path.attributes } /> }
            </For>
          </g>
        </Show>
      </svg>
    </Show>
  )
}

export default FontAwesomeIcon;
