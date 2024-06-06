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
  <svg viewBox="0 0 382 512" width="18" height="26">
    <path
      fill="currentColor"
      d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM192 192c13.3 0 24 10.7 24 24V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V216c0-13.3 10.7-24 24-24zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
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
  const styles = `height:1em;font-size:${transform?.size ? transform.size / 16 : 1}em`;
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
